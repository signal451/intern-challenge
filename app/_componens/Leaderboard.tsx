import { Crown } from "lucide-react"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { supabaseServerClient } from "@/utils/supabase/server"


const Leaderboard =  async () => {

    // okay


    return (
        <Dialog>
            <DialogTrigger><Crown className="h-4 w-4 ml-5 text-zinc-500 outline-none hover:text-red-50000 sm:h-5 :w-5 " /></DialogTrigger>
            <DialogContent className="max-w-screen-md">
                <DialogHeader>
                    <DialogTitle>All-time top 10 Leaderboards</DialogTitle>
                </DialogHeader>
                <Table className="mt-10">
                    <TableHeader>
                        <TableRow>
                            <TableHead className=""> profile</TableHead>
                            <TableHead className="">wpm</TableHead>
                            <TableHead>accuracy</TableHead>
                            <TableHead>chars</TableHead>
                            <TableHead className="text-right">mode</TableHead>
                            <TableHead className="text-right">date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                <Image
                                    src={'/hm.jpg'}
                                    alt="profile image"
                                    width={50}
                                    height={50}
                                    quality={100}
                                    className="object-cover rounded-full"
                                />
                            </TableCell>
                            <TableCell className="font-medium"> 105 </TableCell>
                            <TableCell>95.40%</TableCell>
                            <TableCell>120</TableCell>
                            <TableCell className="text-right">time 15</TableCell>
                            <TableCell className="text-right">27 Aug 2023</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </DialogContent>
        </Dialog>

    )
}

export default Leaderboard