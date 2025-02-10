import { FC } from "react"
import './Profile.scss'

export const Profile: FC = () => {
    return (
        <div className="profile-img">
            <img alt="profile" src="/avatar.png" />
        </div>
    )
}