"use client"
import { LogOut, User } from "lucide-react"
import { supabaseBrowserClient } from "@/utils/supabase/client"
import { useUserStore } from "@/lib/hooks/useUser"
import { useRouter } from "next/navigation"
import Link from "next/link"

const HeaderItems = () => {
  const router = useRouter()
  const user = useUserStore((state) => state.user)


  const handleLogOut = async () => {
    const supabase = supabaseBrowserClient()
    const { error } = await supabase.auth.signOut()
    router.refresh()
  }

  const handleSignUp = async () => {
    const supabase = supabaseBrowserClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
        redirectTo: location.origin + "/auth/callback"
      },
    })
  }

  return (
    <div className="flex">
      {
        user ? (
          <>
            <div className="flex cursor-pointer group justify-center ">
              <Link href={'/account'} className="text-xs md:text-sm text-zinc-500 group-hover:text-red-500 outline-none">   {user.user_metadata['name']}   </Link>
              <User className="h-4 w-4 ml-2 text-zinc-500 sm:h-5 sm:w-5 group-hover:text-red-500 hidden sm:block" />
            </div>
            <LogOut className="h-4 w-4 ml-5 text-zinc-500 sm:h-5 sm:w-5 cursor-pointer hover:text-red-500" onClick={handleLogOut} />
          </>
        )
          : (
            <User className="h-4 w-4 ml-2 text-zinc-500 sm:h-5 sm:w-5 hover:text-red-500" onClick={handleSignUp} />
          )
      }
    </div>
  )
}

export default HeaderItems