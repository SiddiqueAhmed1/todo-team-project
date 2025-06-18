import { task } from "../assets/assets";

const TaskCard = () => {
	const {  title, description, priority, status, image, date } = task;
	console.log(task)
	return (
		<>
			<div>
				<span className="absolute top-2 right-2 text-gray-400 cursor-pointer hover:text-gray-600">
					<HiOutlineDotsHorizontal />
				</span>

				{/* Task Info */}
				<div className="flex-1">
					<h2 className="font-medium text-gray-800 text-base mb-1">{title}</h2>
					<p className="text-sm text-gray-600 mb-3 line-clamp-3">
						{description.slice(0, 120)}...
					</p>
					<div className="flex flex-wrap gap-4 text-xs text-gray-500">
						<p>
							<strong>Priority:</strong> {priority}
						</p>
						<p>
							<strong>Status:</strong> {status}
						</p>
					</div>
				</div>

				{/* Task Image */}
				<div className="w-full sm:w-24 flex flex-col items-center">
					<img
						src={image}
						alt={title}
						className="rounded-md object-cover w-full h-20 mt-2"
					/>
					<p className="text-[10px] text-center text-gray-500 mt-2">
						Created on: {date}
					</p>
				</div>
			</div>
		</>
	);
};

export default TaskCard;
