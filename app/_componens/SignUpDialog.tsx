import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"


const SignUpDialog = () => {
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
                    />
                </div>
                <Button type="submit">Continue </Button>
            </DialogContent>

        </Dialog>
    )
}

export default SignUpDialog