import Logo from '../util/Logo';
import { Link, NavLink, useLoaderData } from '@remix-run/react';

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
              (<Link to="/" className="cta">
                Logout 
                <ul>

                {Object.values(userInfo).map(item => (
                  <li key={item}>{item}</li>
                ))}
                  
                </ul>
              </Link>)
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
