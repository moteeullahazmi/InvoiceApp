import { Label } from "@/components/ui/label"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login(){
    return <>
    <div className="h-screen w-full flex justify-center items-center ">
        <Card className="max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">
                    Login
                </CardTitle>
                <CardDescription>
                    Enter your email below to login in to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <Label>Email</Label>
                        <Input placeholder="azmi@gmail.com"/>
                        <Button>Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
    </>
}