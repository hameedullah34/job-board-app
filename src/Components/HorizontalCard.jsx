import React from "react";
import { BiSolidEditLocation, BiSolidLocationPlus } from "react-icons/bi";
import {
	BsBookmark,
	BsBookmarkFill,
	BsStarFill,
	BsCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const HorizontalCard = ({ job }) => {
	return (
		<Link to={`/joboffer/${job.id}`}>
			<div key={job.id} className="w-full h-56 rounded-md bg-white p-4">
				<div className="flex">
					<img
						src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
						className="h-12"
					/>
					<div className="mt-3 px-8">
						<div className="flex item-center gap-3 ">
							<h2 className="text-xl font-bold">{job.title}</h2>
							<p
								className={`h-8 w-24 px-2 rounded-md text-gray-700 text-center ${job.isUrgent ? "bg-cyan-400" : ""}`}
							>
								{job.isUrgent ? "Urgent" : "Not Urgent"}
							</p>
						</div>
						<div className="flex gap-2 py-2">
							<div className="flex items-center gap-4">
								<p>{job.postedAgo}</p>
								<div className="w-1 h-1 bg-black rounded-full"></div>
								<p>{job.type}</p>
								<div className="w-1 h-1 bg-black rounded-full"></div>
								<p>{job.salary}</p>
								<div className="w-1 h-1 bg-black rounded-full"></div>
								<p>{job.applied} Applied</p>
							</div>
						</div>
						<p>{job.description}</p>
						<div className="flex gap-3 items-center py-2">
							<BiSolidEditLocation /> <span>{job.rating}</span>
						</div>
						<div className="flex gap-2">
							{job.tags.map((tag) => (
								<p
									key={tag}
									className="h-6 px-2 rounded-md bg-neutral-200 text-sm"
								>
									{tag}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default HorizontalCard;
