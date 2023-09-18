import Login from '~/component/auth/AuthForm';
import styles from '~/styles/auth.css'
export default function Index() {
  return (
    <Login/>
  );
}



export async function action({request}){
  const searchParams = new URL(request.url).searchParams
  const AuthMode = searchParams.get('model') || 'login'

  const formData = await request.formData();
  const formParsData = Object.fromEntries(formData);
  console.log('FormParseData',formParsData);
  if(AuthMode == 'login'){
    console.log('Login');
    return null;
  }else{
    console.log('singup');
    return null
  }

}


export function links(){
  return [{rel:'stylesheet',href:styles}];
}