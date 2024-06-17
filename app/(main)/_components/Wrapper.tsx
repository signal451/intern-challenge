import InitQuotes from "@/lib/store/initData"
import fetchData from "../_lib/data"
import TypeSection from "./TypeSection"


const InputWrapper = async () => {
    const data =  await fetchData()
   
    return (
        <>
            {/* <MonkeyTyperInput/> */}
            <TypeSection/>
            <InitQuotes quotes={data[0]} />
        </>
    )

}

export default InputWrapper