import { Outlet } from "@remix-run/react";
import MarketingStyles from '~/styles/marketing.css';
import MainHeader from "../component/navigation/MainHeader";
import { getSession, getUserFromSession } from "../data/auth.server";

export default function MarketingPathlessRoute(){
    return(
        <>
        <MainHeader/>
        <Outlet/>
        </>
    );
}


export async function loader({request}){
    return await getUserFromSession(request);
}

export function links(){
    return[{rel:'stylesheet',href:MarketingStyles}];
}