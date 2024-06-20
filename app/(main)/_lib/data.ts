import { DataProps } from "@/lib/hooks/useData"

type QuotesData = DataProps[]

// this api really shady for real 
const fetchData = async (): Promise<QuotesData> => {
    // in future if I have menu to choose long and short quotes then just change maxLength to make sure it doesn't exceed
    const response = await fetch("https://api.quotable.io/quotes/random?minLength=50&maxLength=120")

    if (!response.ok) {
        console.error("status code:" + response.status)  
    }

    return response.json()
}

export default fetchData