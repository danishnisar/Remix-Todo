import Login from '~/component/auth/AuthForm';
import styles from '~/styles/auth.css'
export default function Index() {
  return (
    <Login/>
  );
}


export function links(){
  return [{rel:'stylesheet',href:styles}];
}