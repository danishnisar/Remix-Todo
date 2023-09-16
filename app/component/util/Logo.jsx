import { Link } from "@remix-run/react";
import {FaMastodon,FaMagento } from 'react-icons/fa';

function Logo() {
  return (
    <h1 id="logo">
      
      <Link href="/"><FaMastodon /> RemixExpenses <FaMagento/> </Link>
    </h1>
  );
}

export default Logo;
