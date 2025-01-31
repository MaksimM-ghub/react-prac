import {FC} from "react"
import "./UserView.css";

type User = {
  username: string
}

export const UserView: FC<User> = ({username}) => {
  return (
    <div className="user-view">
      <div className="user-view__logo">
        {username.slice(0, 1).toUpperCase()}
      </div>
      <span className="user-view__name">{username}</span>
    </div>
  );
};
