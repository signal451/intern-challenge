import ProfileSection from "./_components/ProfileSection"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const AccountPage = () => {

    return (
        <div className="min-h-full px-5 pb-20">
            <ProfileSection />

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