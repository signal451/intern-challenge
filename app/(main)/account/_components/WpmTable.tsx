import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { supabaseBrowserClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";


type WpmDataType = {
    accuracy: string | null;
    chars: string | null;
    created_at: string; 
    id: string;
    mode: string | null;
    user_id: string | null;
    wpm: string;
}[] | null

const WpmTable = ({ id }: { id: string }) => {

    const [wpmData, setWpmData] = useState<WpmDataType>([])

    useEffect(() => {
        const fetchData = async () => {
            const supabase = supabaseBrowserClient()
            const { data, error } = await supabase.from("tests").select('*').eq('user_id', id).order('wpm', { ascending: false }).limit(5)

            if (error) {
                console.error(error.message)
                return toast.error("Failed to fetch user data", { position: 'top-center' })
            }

            setWpmData(data)
        }

        if (id.length > 0) {
            fetchData()
        }

    }, [id])


    return (
        <Table className="mt-10">
            <TableCaption>The highest 5 wpm score </TableCaption>

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
                {wpmData?.map((value, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{value.wpm} </TableCell>
                            <TableCell>{value.accuracy}%</TableCell>
                            <TableCell>{value.chars}</TableCell>
                            <TableCell className="text-right">time {value.mode}</TableCell>
                            <TableCell className="text-right">{new Date(value.created_at).toLocaleString()}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default WpmTable