"use client"
import { useUserStore } from "@/lib/hooks/useUser"
import Image from "next/image"
import WpmTable from "./_components/WpmTable"

// removes image formatted size
const removeImageSize = (url: string ): string => {
    if (url) {
        const regex = /=s96[^&]*/
        return url.replace(regex, '')
    } 
    return ''
}

// format localtimezone
const formatTimeStamp = (timestamp: string) => {
    if(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
}


const AccountPage = () => {

    const user = useUserStore((state) => state.user)
    const profileImg = removeImageSize(user?.user_metadata.avatar_url)

    return (
        <div className="min-h-full px-5 pb-20">
            <div className="min-h-full">
                <div className="pt-20  flex flex-col">
                    <div className="flex items-center">
                        <Image
                            src={profileImg}
                            alt="profile image"
                            width={50}
                            height={50}
                            quality={100}
                            className="object-cover rounded-full"
                        />
                        <div className="pl-4">
                            <p className="font-medium text-xl"> {user?.user_metadata.full_name}  </p>
                            <p className="text-xs text-zinc-600"> Joined 24 Mar 2024 </p>
                        </div>
                    </div>
                </div>
            </div>

            <WpmTable id={user?.id || ''}/>   

        </div>
    )
}

export default AccountPage