"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { useUserStore } from "@/lib/hooks/useUser"
import Image from "next/image"

// removes image formatted size
const removeImageSize = (url: string ): string => {
    if (url) {
        const regex = /=s96[^&]*/
        return url.replace(regex, '')
    } 
    return ''
}

// format localtimezone
const formatTimeStamp = (timestamp: string | undefined) => {
    if(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
}


const AccountPage = () => {

    const user = useUserStore((state) => state.user)
    const profileImg = removeImageSize(user?.user_metadata.avatar_url)


    // create table -> create policy 


    return (
        <div className="min-h-full px-5 pb-20">
            <div className="min-h-full">
                <div className="pt-20  flex flex-col">
                    <div className="flex items-center">
                        <Image
                            src={profileImg}
                            alt="profile image"
                            width={50}
                            height={50}
                            quality={100}
                            className="object-cover rounded-full"
                        />
                        <div className="pl-4">
                            <p className="font-medium text-xl"> {user?.user_metadata.full_name}  </p>
                            <p className="text-xs text-zinc-600"> Joined 24 Mar 2024 </p>
                        </div>
                    </div>
                </div>
            </div>
            <Table className="mt-10">
                <TableCaption>The highest 5 wpm list</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">wpm</TableHead>
                        <TableHead>accuracy</TableHead>
                        <TableHead>chars</TableHead>
                        <TableHead className="text-right">mode</TableHead>
                        <TableHead className="text-right">date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">70.40</TableCell>
                        <TableCell>96.40%</TableCell>
                        <TableCell>129/0/2</TableCell>
                        <TableCell className="text-right">time 15</TableCell>
                        <TableCell className="text-right">Jun 2024 20:37</TableCell>
                    </TableRow>
                </TableBody>
            </Table>


        </div>
    )
}

export default AccountPage