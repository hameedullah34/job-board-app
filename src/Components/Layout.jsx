import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="min-h-screen flex flex-col bg-slate-100">
			<Navbar />
			<div className="flex-1 p-6 px-14">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
