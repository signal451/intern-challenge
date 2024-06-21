"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import Image from "next/image"

type data = {
    accuracy: string | null;
    avatar_url: string | null;
    chars: string | null;
    created_at: string | null;
    mode: string | null;
    wpm: string | null;
}[] | null

const TableLeaderboard = ({ dt }: { dt: data }) => {

    return (
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
                {dt?.map((value, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell className="font-medium">
                                <Image
                                    src={value.avatar_url || ''}
                                    alt="profile image"
                                    width={30}
                                    height={30}
                                    quality={100}
                                    className="object-cover rounded-full"
                                />
                            </TableCell>
                            <TableCell className="font-medium">{value.wpm} </TableCell>
                            <TableCell>{value.accuracy}%</TableCell>
                            <TableCell>{value.chars}</TableCell>
                            <TableCell className="text-right">time {value.mode}</TableCell>
                            <TableCell className="text-right">{new Date(value.created_at || '').toLocaleString()}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}


export default TableLeaderboard