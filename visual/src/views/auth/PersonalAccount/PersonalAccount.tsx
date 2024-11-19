import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faCircleUser as solidCircleUser,
	faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as regularUser, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

const PersonalAccount: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>("profile");
	const handleTabClick = (event: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
		if (tab !== "logout") {
			event.preventDefault();
			setActiveTab(tab);
		}
	};

	return (
		<div className="account">
			<section className="account__management">
				<div className="account__management-wrapper">
					<div className="account__management-header">
						<FontAwesomeIcon icon={faXmark} />
						<div className="account__management-header-user">
							<FontAwesomeIcon icon={solidCircleUser} />
							<p>User Name</p>
						</div>
					</div>
					<nav className="account__nav">
						<a
							href="#"
							className={`account__nav-item ${activeTab === "profile" ? "active" : ""}`}
							onClick={(e) => handleTabClick(e, "profile")}>
							<FontAwesomeIcon icon={regularUser} />
							<span>Profile</span>
						</a>
						<a
							href="#"
							className={`account__nav-item ${activeTab === "help" ? "active" : ""}`}
							onClick={(e) => handleTabClick(e, "help")}>
							<FontAwesomeIcon icon={faCircleQuestion} />
							<span>Help</span>
						</a>
						<a href="./" className={`account__nav-item ${activeTab === "logout" ? "active" : ""}`}>
							<FontAwesomeIcon icon={faArrowRightFromBracket} />
							<span>Logout</span>
						</a>
					</nav>
				</div>
			</section>
			<section className="account-contents"></section>
		</div>
	);
};

export default PersonalAccount;
