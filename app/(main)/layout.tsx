import React, { ReactNode } from "react"
import Header from "../_componens/Header"
import { supabaseServerClient } from "@/utils/supabase/server"
import InitUser from "@/lib/store/initUser"

const monkeyLayout = async ({children} : {children : ReactNode}) => {


    const getCurrentUser = async () => {
        const supabase = supabaseServerClient()
        const { data, error } = await supabase.auth.getUser()
        return data.user
      }

      const data = await getCurrentUser()
    

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-col flex-grow max-w-screen-xl mx-auto w-full">
                {children}
            </main>
            <InitUser user={data} />
        </div>
    )
}

export default monkeyLayout