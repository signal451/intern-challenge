import InitUser from "@/lib/store/initUser"
import InputWrapper from "./_components/Wrapper"
import CommandNote from "./_components/Command"


const monkeyPage = async () => {


  return (
    <div className="flex flex-col pb-20 h-full my-auto px-5 md:px-10">
      <InputWrapper />
      <div className="mt-8 text-center justify-center items-center flex">
            <CommandNote/>
          </div>
    </div>
  )
}

export default monkeyPage 