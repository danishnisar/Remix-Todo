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
    return {message:'404 page not found',status:404};
   
}