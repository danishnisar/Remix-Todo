import Logo from '../util/Logo';
import { Form, Link, NavLink, useLoaderData } from '@remix-run/react';

function MainHeader() {

  const userInfo = useLoaderData();


  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            {!userInfo &&
              (<Link to="/login" className="cta">
                Login
              </Link>)
            }
            {userInfo &&
              (
              <Form method='post' action='/logout' id='logout-form'>
                <button className="cta">Logout</button>
              </Form>
              )
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
