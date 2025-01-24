import { redirect } from "next/navigation"
import {auth} from "./Auth"
export  async function requireUser(){
    const  session = await auth()
    if(!session?.user){
        redirect('/')
    }
    return session;
}