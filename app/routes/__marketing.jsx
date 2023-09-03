import { Outlet } from "@remix-run/react";
import MarketingStyles from '~/styles/marketing.css';
import MainHeader from "../component/navigation/MainHeader";

export default function MarketingPathlessRoute(){
    return(
        <>
        <MainHeader/>
        <Outlet/>
        </>
    );
}

export function links(){
    return[{rel:'stylesheet',href:MarketingStyles}];
}