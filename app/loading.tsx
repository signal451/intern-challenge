import { LoaderCircle } from "lucide-react"

const Loading = () => {

    return (
        <div className="min-h-screen flex items-center justify-center">
            <LoaderCircle className="h-10 w-10 text-red-500 animate-spin" />
        </div>
    )
}

export default Loading

