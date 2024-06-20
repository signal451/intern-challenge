"use client"
import { useUserStore } from "@/lib/hooks/useUser"


const ProfileSection = () => {

    const user = useUserStore((state) => state.user)

    console.log(user?.user_metadata);

    return (
        <div>

        </div>
    )
}

export default ProfileSection