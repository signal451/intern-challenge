import CommandNote from "./_components/Command"
import MonkeyTyperInput from "./_components/Input"

const monkeyPage = () => {
    return (
        <div className="flex flex-col pb-20 h-full my-auto px-5">
           {/* These are shortkey commands */}
          <div className="flex">
          <MonkeyTyperInput/>
          </div>
          <div className="mt-8 text-center justify-center items-center flex">
            <CommandNote/>
          </div>
        </div>
    )
}

export default monkeyPage