import React from "react";
import { useParams } from "react-router-dom";
import jobs from "./jobs";

const JobPage = () => {
	const { id } = useParams();

	const job = jobs.find((job) => job.id === parseInt(id));

	return (
		<>
			<div className="bg-white rounded-md p-10 w-fit mx-auto h-full">
				<h1 className="text-3xl font-bold">{job.title}</h1>
				<p className="text-gray-500">{job.company}</p>
				<p className="mt-4">{job.description}</p>
				<p className="mt-2">📍 {job.location}</p>
				<p className="mt-2">💼 {job.type}</p>
				<p className="mt-2">💰 {job.salary}</p>
				<p className="mt-2">⭐ {job.rating}</p>
				<p className="mt-2">🕐 {job.postedAgo}</p>
				<p className="mt-2">👥 {job.applied} Applied</p>
			</div>
		</>
	);
};

export default JobPage;
