import { json } from "@remix-run/node";
import { destroyUserFromSession } from "../data/auth.server";

export function loader(){
    return json({
        message:'Invalid Method, Blocked by supervisor',
    },{
        status:400,
    })
}

export function action({request}){

    if(request.method !== 'POST')
    {
        return null
    }

    return destroyUserFromSession(request);

}

