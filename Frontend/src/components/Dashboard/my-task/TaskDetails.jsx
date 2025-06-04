import { task } from "../../../assets/assets";

const TaskDetails = () => {
	const { title, description, priority, status, image, date } = task || [];
	return (
		<>
			<div>
				<div>
					<div className="md:w-full w-24 flex gap-4  items-center">
						<img
							src={image}
							alt={title}
							className="rounded-md object-cover w-42 h-42 mt-2"
						/>
						<div className="space-y-4">
							<p className=" text-[#000000] font-medium text-lg">{title}</p>
							<div className=" flex gap-2">
								<div className="">
									<p className=" mb-3">Priority: </p>
									<p>Status: </p>
								</div>
								<div>
									<p className=" text-red-500 mb-3">{priority ?? "High"}</p>
									<p className=" text-red-500">{status}</p>
								</div>
							</div>
							<p className="text-[12px] text-[#A1A3AB] mt-2">
								Created on: {date}
							</p>
						</div>
					</div>
				</div>

				{/* Task Info */}
				<div className="flex-1 mt-9 text-[#747474]">
					<div className=" flex gap-1 items-center ">
						<p className=" font-medium text-lg">Title:</p>
						<h2 className="">{title}</h2>
					</div>
					<div className="">
						<h2>
							<span className=" font-medium text-lg">Task Description:</span>

							{description}
						</h2>
					</div>

					<div className="flex flex-wrap gap-4 text-xs text-gray-500"></div>
				</div>

			</div>
		</>
	);
};

export default TaskDetails;
