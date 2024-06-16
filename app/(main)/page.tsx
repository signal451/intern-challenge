import TypeSectionBox from "./_components/Box"
import CommandNote from "./_components/Command"

const monkeyPage = () => {
    return (
        <div className="flex flex-col pb-20 h-full my-auto px-5 md:px-20">
           {/* These are shortkey commands */}
          <div className="">
         <TypeSectionBox/>
          </div>
          {/* <div className="mt-8 text-center justify-center items-center flex">
            <CommandNote/>
          </div> */}
        </div>
    )
}

export default monkeyPage