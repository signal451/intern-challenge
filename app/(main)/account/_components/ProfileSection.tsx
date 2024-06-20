"use client"
import { useUserStore } from "@/lib/hooks/useUser"
import Image from "next/image"


const ProfileSection = () => {

    // const user = useUserStore((state) => state.user)

    // console.log(user?.user_metadata);

    return (
        <div className="min-h-full">
            <div className="pt-20  flex flex-col">
                <div className="flex items-center">
                    <Image
                        src={"/images.jpg"}
                        alt="profile image"
                        width={60}
                        height={60}
                        quality={100}
                        className="object-cover rounded-full"
                    />
                    <div className="pl-4">
                        <p className="font-medium text-xl"> Enkhtugs Gankhuyg  </p>
                        <p className="text-xs text-zinc-600"> Joined 24 Mar 2024 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection