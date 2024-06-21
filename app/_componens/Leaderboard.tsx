import { Crown } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { supabaseServerClient } from "@/utils/supabase/server"
import TableLeaderboard from "./Table"


const Leaderboard =  async () => {

    const supabase = supabaseServerClient()
    const {data, error }= await supabase.from("leaderboard").select('*')

    if (error) {
        console.error(error.message)
    }


    return (
        <Dialog>
            <DialogTrigger><Crown className="h-4 w-4 ml-5 text-zinc-500 outline-none hover:text-red-50000 sm:h-5 :w-5 " /></DialogTrigger>
            <DialogContent className="max-w-screen-md">
                <DialogHeader>
                    <DialogTitle>All-time top 10 Leaderboards</DialogTitle>
                </DialogHeader>
                <TableLeaderboard dt={data}/>
            </DialogContent>
        </Dialog>

    )
}

export default Leaderboard