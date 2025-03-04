import { useParams, useNavigate } from "react-router-dom";
import { USERS } from "../../data";
import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];
	const navigate = useNavigate();

	const handleClickName = () => {
		if (user.playlist) {
			navigate(`/playlist/${user.playlist.id}`);
		  }
	}

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>Пользователя с таким userId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>
				{user.playlist && <p className="users__playlist-name" onClick={handleClickName}>{user.playlist?.name}</p>}
			</div>
		</div>
	);
}
