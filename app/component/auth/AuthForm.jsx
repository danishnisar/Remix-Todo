import { FaLock,FaUserPlus } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router-dom';
import { useNavigation,Form } from '@remix-run/react';

function AuthForm() {

  const navigation = useNavigation();
  let [searchParams] = useSearchParams();

  let authMode = searchParams.get('model') || 'login';

  let submitButtonCaption = authMode === 'login' ? 'Login' : 'signup'
  let toggleButtonCaption = authMode === 'login' ? 'Log in with existing user' : 'Create new user';

  const isSubmiting = navigation.state !== 'idle'

  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">
        { authMode === 'login' ? <FaLock /> : <FaUserPlus/>}
        
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button disabled={isSubmiting }>{isSubmiting ? 'Authenticating...' : submitButtonCaption}</button>
        <Link to={authMode === 'login' ? '?model=signup':'?model=login'}>{toggleButtonCaption}</Link>
      </div>
    </Form>
  );
}

export default AuthForm;
