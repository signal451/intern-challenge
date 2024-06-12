import MonkeyTyperInput from "./_components/Input"

const monkeyPage = () => {
    return (
        // I need my textbox right center of the screensize or else this is stupid
        <div className="layout flex flex-col items-center pt-40 px-5">
           {/* These are shortkey commands */}
           <MonkeyTyperInput/>
          <div className="text-center ">

          </div>
        </div>
    )
}

export default monkeyPage