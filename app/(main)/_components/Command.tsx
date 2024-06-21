import Kbd from "./Kbd"
import Image from "next/image"

const CommandNote = () => {

    return (
        <div className='flex items-center space-x-3 text-sm'>
            <Kbd>tab</Kbd>
            <span className='text-sm'> - restart test </span>
            <Image
                src={"/oi.png"}
                alt="gif"
                width={25}
                height={25}
                quality={100}
                className="object-fill"
            />
        </div>
    )
}

export default CommandNote