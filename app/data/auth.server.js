
import { redirect } from '@remix-run/node';
import { prisma } from '../data/database.server';
import { hash,compare } from 'bcryptjs';

export async function signup({ email, password }) {

    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
        const error = new Error('A user with provided email address already exist.');
        error.status = 422;
        throw error;
    }

    const hasPassword = await hash(password, 12);
    await prisma.user.create({
        data: {
            email: email,
            password: hasPassword
        }
    });
}

export function singin({ email, password }) {
    const isNotUser = prisma.user.findFirst({ where: email })
   
    if (!isNotUser) {
        const error = new Error('Could not log you in, please check the provided credentialsw');
        error.status = 401;
        return error;
    }

    
    const isValidPassword = compare(password,isNotUser.password);
    if(isValidPassword){
        
    }


}