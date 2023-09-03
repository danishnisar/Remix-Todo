import { Outlet } from "@remix-run/react";
import MarketingStyles from '~/styles/marketing.css';

export default function MarketingPathlessRoute(){
    return <Outlet/>
}

export function links(){
    return[{rel:'stylesheet',href:MarketingStyles}];
}