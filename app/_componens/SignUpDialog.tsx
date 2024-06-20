import React, { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { supabaseBrowserClient } from "@/utils/supabase/client"
import { toast } from "sonner"



const SignUpDialog = () => {

    const [value, setValue] = useState(() => '')

    // check username is unique --> google sign up --> update that table
    const SignupHandler = async () => {

        // validation 

        const supabase = supabaseBrowserClient()
        const { data, error } = await supabase.from('users').select('username')
        // check username is exist
        const isUsernameExist = data?.some((element) => element.username === value)

        if (!isUsernameExist) {
            const {data, error}   = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                    redirectTo: location.origin + "/auth/callback"
                },
            })

            console.log(data);
            console.log(error);
        }
        else {
            return toast.error(`${value} username already taken 😢`, {
                position: 'top-center'
            })
        }
    }


    return (
        <Dialog>
            <DialogTrigger className="outline-none">
                <User className="h-4 w-4 ml-2 text-zinc-500 sm:h-5 sm:w-5 hover:text-red-500" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Account name</DialogTitle>
                    <DialogDescription>
                        Please enter a username before continuing. Reminder: the only way to register is via  <span className="text-red-200"> Google OAuth </span> 💀
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <Input
                        id="link"
                        placeholder="username"
                        onChange={(e) => {
                            setValue(e.target.value.trim())
                        }}
                    />
                </div>
                <Button type="submit" onClick={SignupHandler}>Continue </Button>
            </DialogContent>

        </Dialog>
    )
}

export default SignUpDialog