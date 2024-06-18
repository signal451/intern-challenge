import CommandNote from "./_components/Command"
import InputWrapper from "./_components/Wrapper"

const monkeyPage = () => {

    return (
        <div className="flex flex-col pb-20 h-full my-auto px-5 md:px-10">
          <InputWrapper/>
          <div className="mt-8 text-center justify-center items-center flex">
            <CommandNote/>
          </div>
        </div>
    )
}

export default monkeyPage