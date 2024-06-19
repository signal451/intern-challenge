import InitUser from "@/lib/store/initUser"
import InputWrapper from "./_components/Wrapper"
import CommandNote from "./_components/Command"
import { supabaseServerClient } from "@/utils/supabase/server"

const monkeyPage = async () => {

  const getCurrentUser = async () => {
    const supabase = supabaseServerClient()
    const { data, error } = await supabase.auth.getUser()
    return data.user
  }

  const data = await getCurrentUser()

  return (
    <div className="flex flex-col pb-20 h-full my-auto px-5 md:px-10">
      <InputWrapper />
      <div className="mt-8 text-center justify-center items-center flex">
            <CommandNote/>
          </div>
      <InitUser user={data} />
    </div>
  )
}

export default monkeyPage 