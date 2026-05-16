import React from "react";
import { useState } from "react";
import jobs from "./jobs";
import Card from "./Card";
import HorizontalCard from "./HorizontalCard";
const AvailabilityChecks = [
	{ label: "Urgent", key: "urgent" },
	{ label: "Remote", key: "remote" },
	{ label: "Full-Time", key: "fullTime" },
];

const ExperienceChecks = [
	{ label: "Graphic Designer", key: "graphicDesigner" },
	{ label: "UI Designer", key: "uiDesigner" },
	{ label: "UX Designer", key: "uxDesigner" },
	{ label: "Developer", key: "developer" },
	{ label: "UX Writer", key: "uxWriter" },
	{ label: "Frontend Developer", key: "frontEndDeveloper" },
];

const Homepage = () => {
	const [filters, setFilters] = useState({
		urgent: false,
		remote: false,
		fullTime: false,
		graphicDesigner: false,
		uiDesigner: false,
		uxDesigner: false,
		developer: false,
		uxWriter: false,
		frontEndDeveloper: false,
	});
	const [title, setTitle] = useState("");
	const titleController = (e) => {
		setTitle(e.target.value);
	};
	const checkedExperiences = [];
	if (filters.graphicDesigner) checkedExperiences.push("Graphic Designer");
	if (filters.uiDesigner) checkedExperiences.push("UI Designer");
	if (filters.uxDesigner) checkedExperiences.push("UX Designer");
	if (filters.developer) checkedExperiences.push("Developer");
	if (filters.uxWriter) checkedExperiences.push("UX Writer");
	if (filters.frontEndDeveloper) checkedExperiences.push("Frontend Developer");

	const filterJobs = jobs.filter((job) => {
		if (filters.remote && job.type != "Remote") return false;
		if (filters.fullTime && job.type != "Full-Time") return false;
		if (filters.urgent && !job.isUrgent) return false;
		if (
			checkedExperiences.length > 0 &&
			!checkedExperiences.includes(job.experience)
		)
			return false;

		if (title && !job.title.toLowerCase().includes(title.toLowerCase()))
			return false;
		return true;
	});

	const filterHandler = (key) => {
		setFilters((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const DisplayCount = filterJobs.slice(0, 4);
	const remJobs = filterJobs.slice(4);
	return (
		<div className="flex gap-6   mt-2 rounded-2xl">
			<aside className="w-72 sticky top-5 h-fit p-6 bg-white rounded-md">
				<h1 className="font-bold py-5 text-2xl">Filter</h1>

				<h2 className="font-bold py-5 text-xl">Availability</h2>
				{AvailabilityChecks.map((item) => {
					return (
						<div key={item.key} className="flex items-center gap-3 pt-0.5">
							<input
								type="checkbox"
								id={item.label}
								className="w-4 h-4 accent-black cursor-pointer"
								onClick={() => filterHandler(item.key)}
							/>
							<label htmlFor={item}>{item.label} </label>
						</div>
					);
				})}
				<h2 className="font-bold py-3 text-xl">Experience</h2>
				{ExperienceChecks.map((item) => {
					return (
						<div key={item.key} className="flex items-center gap-3 pt-0.5">
							<input
								type="checkbox"
								id={item.key}
								className="w-4 h-4 accent-black cursor-pointer"
								onClick={() => filterHandler(item.key)}
							/>
							<label htmlFor={item}>{item.label}</label>
						</div>
					);
				})}
			</aside>
			<main className="flex-1 p-6 rounded-md">
				<h2 className="font-bold py-3 text-xl">Popular</h2>
				<input
					type="text"
					className="border-2 rounded-md py-2 px-4 text-center mb-3 w-3xl"
					placeholder="Search Job By Title"
					value={title}
					onChange={titleController}
				/>
				<div className="flex flex-wrap gap-10 mt-5">
					{DisplayCount.map((job) => {
						return <Card job={job} />;
					})}
				</div>

				<div className="mt-4">
					<h2 className="font-bold py-3 text-xl">Currently Hiring</h2>
					{remJobs.map((job) => (
						<HorizontalCard job={job} />
					))}
				</div>
			</main>
		</div>
	);
};

export default Homepage;
