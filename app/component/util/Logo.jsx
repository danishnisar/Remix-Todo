import { Link } from "@remix-run/react";
import {FaMastodon } from 'react-icons/fa';

function Logo() {
  return (
    <h1 id="logo">
      
      <Link href="/"><FaMastodon /> RemixExpenses</Link>
    </h1>
  );
}

export default Logo;
