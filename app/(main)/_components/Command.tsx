"use client"
import React, {useEffect} from 'react';
import Kbd from "./Kbd"    
import { toast } from 'sonner';

const CommandNote = () => {

    useEffect(() => {
        toast.info("Random Quotes API is loaded 👀", {
            position: 'top-center'
        })
    }, [])

    return (
        <div className='flex items-center space-x-2 text-sm'>
                <Kbd>tab</Kbd>
                <span className='text-sm'> - restart test </span>
              </div>
    )
}

export default CommandNote