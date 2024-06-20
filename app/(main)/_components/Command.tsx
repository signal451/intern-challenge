import Kbd from "./Kbd"    

const CommandNote = () => {

    return (
        <div className='flex items-center space-x-2 text-sm'>
                <Kbd>tab</Kbd>
                <span className='text-sm'> - restart test </span>
              </div>
    )
}

export default CommandNote