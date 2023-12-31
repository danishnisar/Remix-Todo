import Login from '~/component/auth/AuthForm';
import styles from '~/styles/auth.css'
import { ValidateCredentials } from '../data/errorValidation.server';
import { signup, singin } from '../data/auth.server';
import { redirect } from '@remix-run/node';
export default function Index() {
  return (
    <Login />
  );
}



export async function action({ request }) {

  const searchParams = new URL(request.url).searchParams
  const AuthMode = searchParams.get('model') || 'login'

  const formData = await request.formData();
  const formParsData = Object.fromEntries(formData);
  console.log(formParsData);

  try {
    ValidateCredentials(formParsData)
  } catch (error) {
    console.log(error);
    return error
  }

  try {
    if (AuthMode == 'login') {
      return await singin(formParsData);
    } else {
      return await signup(formParsData);
    }
  } catch (error) {
    if (error.status === 422 || error.status === 401) {
      return { message: error.message }
    }
    // return { message: error.message }

  }



}


export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}