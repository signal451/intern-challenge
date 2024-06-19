"use client"
import { LogOut, User } from "lucide-react"
import { supabaseBrowserClient } from "@/utils/supabase/client"
import { useUserStore } from "@/lib/hooks/useUser"
import { useRouter } from "next/navigation"
import SignUpDialog from "./SignUpDialog"

const HeaderItems = () => {
  const router = useRouter()
  const user = useUserStore((state) => state.user)

  console.log("render");

  const handleLogIn = async () => {
    // const supabase = supabaseBrowserClient()
    // await supabase.auth.signInWithOAuth({
    //   provider: 'google',
    //   options: {
    //     queryParams: {
    //       access_type: 'offline',
    //       prompt: 'consent',
    //     },
    //     redirectTo: location.origin + "/auth/callback"
    //   },
    // })


  }

  const handleLogOut = async () => {
    const supabase = supabaseBrowserClient()
    const { error } = await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div className="flex">
      {
        user ? (
          <> 
          <div className="flex cursor-pointer group "> 
        <span className="text-sm text-zinc-500 group-hover:text-red-500"> {user.user_metadata['name']} </span>
        <User className="h-4 w-4 ml-2 text-zinc-500 sm:h-5 sm:w-5 group-hover:text-red-500" />
        </div>
        <LogOut className="h-4 w-4 ml-5 text-zinc-500 sm:h-5 sm:w-5 cursor-pointer hover:text-red-500" onClick={handleLogOut}/>
        </>
        )
        : (
         <SignUpDialog/>
        )
      }
    </div>
  )
}

export default HeaderItems