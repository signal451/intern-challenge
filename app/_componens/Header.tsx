import Image from "next/image"
import { Poppins } from "next/font/google"
import { Crown, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["500", "600", "700"]
})

const Header = () => {
    return (
        <div className="max-w-screen-lg mx-auto w-full">
        <div className="flex px-5 pt-10 justify-between items-center ">
            <div className="flex items-center">
                <div className="flex cursor-pointer">
                    <div>
                        <Image src={"/mezorn.png"} width={30} height={30} alt="mezorn logo" priority />
                    </div>
                    <div className="relative hidden sm:block sm:pl-3">
                        <span className={cn("text-xs absolute text-red-500 -top-1 left-3 ", font.className)}> internship challenge </span>
                        <p className={cn("font-medium text-3xl text-zinc-200 hover:text-zinc-400", font.className)}> monkeytype </p>
                    </div>

                </div>
                <div>
                    <Crown className="h-4 w-4 ml-5 text-zinc-400 hover:text-red-400 sm:h-5 sm:w-5" />
                </div>
            </div>
            <div className="">
                <User  className="h-4 w-4 ml-5 text-zinc-400 hover:text-red-400 sm:h-5 sm:w-5" />
            </div>
        </div>
        </div>
    )
}

export default Header