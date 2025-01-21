import { redirect } from "next/navigation"
import {auth} from "./Auth"
export default async function(){
    const  session = await auth()
    if(!session?.user){
        redirect('/')
    }
}