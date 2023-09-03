import { Response } from "@remix-run/node";
import { redirect } from "react-router"
import { json } from "stream/consumers";



export function loader({params}){
    
    console.log(params);
    if(params['*'] === 'exp'){
        return redirect('/expenses');
    }
    throw new Response('404 page not found',{status:404})
   
}