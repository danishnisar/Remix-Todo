
import { redirect } from '@remix-run/node';
import { prisma } from '../data/database.server';
import { hash, compare } from 'bcryptjs';
import { createCookieSessionStorage } from '@remix-run/node'

const SESSION_SECRET = process.env.SESSION_SECRET;
const sesstionStorage = createCookieSessionStorage({
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        secrets: [SESSION_SECRET],
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, //30days
        httpOnly: true
    }
});

async function createSesstion(userId,userEmail, redirectUrl) {
    const sesstionCookie = await sesstionStorage.getSession();
    sesstionCookie.set('userId', userId);
    sesstionCookie.set('userEmail',userEmail)
    return redirect(redirectUrl, {
        headers: {
            'Set-Cookie': await sesstionStorage.commitSession(sesstionCookie),
        },
    })
}

export async function getUserFromSession(request) {
    const session = await sesstionStorage.getSession(request.headers.get('Cookie'));

    const userID = session.get('userId')
    const userEmail = session.get('userEmail')
    if (!userID) {

        return null
    }
    return {userID:userID,userEmail:userEmail};


}

export async function destroySession(request) {

    const sesstionCookie = await sesstionStorage.getSession(request.headers.get('Cookie'))
    return redirect('/',
        {
            headers: {
                'Set-Cookies': await sesstionCookie.sesstionStorage.destroySession()
            }
        }
    )

}

export async function signup({ email, password }) {

    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
        const error = new Error('A user with provided email address already exist.');
        error.status = 422;
        throw error;
    }

    const hasPassword = await hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email: email,
            password: hasPassword
        }
    });

    return  createSesstion(user.id,user.email, '/expenses')
}

export async function singin({ email, password }) {
    const isNotUser = await prisma.user.findFirst({ where: { email } })

    if (!isNotUser) {
        const error = new Error('Could not log you in, please check the provided credentialsw');
        error.status = 401;
        return error;
    }


    const isValidPassword = await compare(password, isNotUser.password);

    if (!isValidPassword) {
        const error = new Error('Could not log you in, please check the provided credentialsw');
        error.status = 401;
        return error;

    }

    return  createSesstion(isNotUser.id,isNotUser.email, '/expenses');
}