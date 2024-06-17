import InitQuotes from "@/lib/store/initData"
import MonkeyTyperInput from "./Input"
import fetchData from "../_lib/data"


const InputWrapper = async () => {
    const data =  await fetchData()
   
    return (
        <>
            <MonkeyTyperInput/>
            <InitQuotes quotes={data[0]} />
        </>
    )

}

export default InputWrapper