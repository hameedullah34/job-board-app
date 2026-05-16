import React from "react";
import {
	BsBookmark,
	BsBookmarkFill,
	BsStarFill,
	BsCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ job }) => {
	return (
		<Link to={`/joboffer/${job.id}`}>
			<div key={job.id} className="w-56 h-56 rounded-md bg-white p-4">
				<div className="flex items-center justify-between">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCWElicsc6dSdtZmqaHhRoq6M6QMI3-PPxA&s"
						className="h-8 rounded-full"
					/>
					<h2>{job.company}</h2>
					<BsBookmark />
				</div>
				<h2 className="pt-4 pb-2 text-xl font-bold">{job.title}</h2>
				<div className="flex gap-2 pb-4">
					<div className="flex gap-1 items-center text-yellow-400">
						<BsStarFill /> <span>{job.rating}</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-1 h-1 bg-black rounded-full"></div>
						<p>{job.location}</p>
					</div>
				</div>

				<div className="flex items-center gap-2 pt-6">
					<div className="w-1 h-1 bg-green-800 rounded-full"></div>
					<p>
						{job.postedAgo} - {job.applied} Applied
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
