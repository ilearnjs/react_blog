import React from "react";

const user = ({ userName }) => {
	return (
		<div className="user">
			<div className="user-content">
				<div className={`avatar-big ${userName}`}>
				</div>
				<span className="name-big">
					{`mr.${userName}`}
				</span>
			</div>
		</div>
	);
};

export default user;