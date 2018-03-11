import React from "react";

const user = ({ userName }) => {
	const avatarStyle = {
		backgroundImage: `url(https://api.adorable.io/avatars/120/${userName})`,
	};

	return (
		<div className="user">
			<div className="user-content">
				<div 
					className={`avatar-big ${userName}`}
					style={avatarStyle}
				>
				</div>
				<span className="name-big">
					{userName}
				</span>
			</div>
		</div>
	);
};

export default user;