import { Response } from "@remix-run/node";
import { redirect, useLoaderData } from "react-router"
import { json } from "stream/consumers";



export default function NotFoundIndex(){

    
    const errorNotFound = useLoaderData();
    console.log(errorNotFound);
    return(<h1>{errorNotFound?.message && errorNotFound.message }</h1>);
}


export function loader({params}){
    
    console.log(params);
    if(params['*'] === 'exp'){
        return redirect('/expenses');
    }
    throw new Response("Page not found",{status:404,statusText:"Use valid route"})
    // return {message:'404 page not found',status:404};
   
}