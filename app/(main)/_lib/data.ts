import { DataProps } from "@/lib/hooks/useData"

type QuotesData = DataProps[]

// I need to write more robust code this is awful
const fetchData = async (): Promise<QuotesData> => {
    // in future if I have menu to choose long and short quotes then just change maxLength to make sure it doesn't exceed
    const response = await fetch("https://api.quotable.io/quotes/random?minLength=60&maxLength=100", { cache: 'no-store'})

    if (!response.ok) {
        console.error("status code:" + response.status)  
    }

    return response.json()
}

export default fetchData