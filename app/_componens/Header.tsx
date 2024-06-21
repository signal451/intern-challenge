import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import HeaderItems from "./Item"
import Link from "next/link"
import Leaderboard from "./Leaderboard"

const font = Poppins({
    subsets: ["latin"],
    weight: ["500", "600", "700"]
})

const Header = () => {
    return (
        <div className="max-w-screen-xl mx-auto w-full">
            <div className="flex px-5 pt-10 justify-between items-center ">
                <div className="flex items-center">
                    <div className="flex cursor-pointer">
                        <div>
                            <Image src={"/mezorn.png"} width={30} height={30} alt="mezorn logo" priority />
                        </div>
                        <div className="relative hidden sm:block sm:pl-3">
                            <Link href={"/"} className="outline-none"> 
                            <span className={cn("text-xs absolute text-red-500 -top-2 left-3 ", font.className)}> internship challenge </span>
                            <p className={cn("font-medium text-3xl text-zinc-200 hover:text-zinc-400", font.className)}> monkeytype </p>
                            </Link>
                        </div>

                    </div>
                    <div>
                        <Leaderboard/>
                    </div>
                </div>
                <HeaderItems/>
            </div>
        </div>
    )
}

export default Header