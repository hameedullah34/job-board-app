import React from "react";
import { useState } from "react";
import {
	BsBriefcase,
	BsBookmark,
	BsChatDots,
	BsPeople,
	BsBell,
} from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
	const navItems = [
		{ icon: BsBriefcase, label: "Portfolio", path: "/portfolio" },
		{ icon: BsBookmark, label: "Job Offer", path: "/joboffer" },
		{ icon: BsChatDots, label: "Message", path: "/messeges" },
		{ icon: BsPeople, label: "Community", path: "/community" },
		{ icon: BsBell, label: "Notifications", path: "/notification" },
	];

	const [active, setActive] = useState("Portfolio");
	return (
		<div className="h-20  px-20 py-2 flex justify-between items-center bg-white ">
			<Link to={"/"} className="text-xl font-bold">
				Carimodal
			</Link>
			<div>
				<ul className="flex gap-15">
					{navItems.map((item, index) => {
						const Icon = item.icon;
						const title = item.label;
						return (
							<>
								<NavLink
									key={index}
									to={item.path}
									className={({ isActive }) =>
										`flex flex-col items-center gap-1.5 py-2 ${isActive ? "border-b-2 border-orange text-orange-500" : "border-b-2 border-transparent"}`
									}
								>
									<div className="flex items-center gap-4">
										<Icon size={18} />
										<span>{title}</span>
									</div>
									<div
										className={`h-0.75 w-full rounded-full ${
											active === title ? "" : ""
										}`}
									/>
								</NavLink>
							</>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
