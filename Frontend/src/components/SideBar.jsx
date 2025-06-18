import { Link, NavLink } from "react-router-dom";
import { assets, sidebarLinks } from "../assets/assets";
import { IoMdLogOut } from "react-icons/io";

const SideBar = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center mb-7 absolute left-8 top-24 text-white">
				<img
					className="w-20 h-20 border-4 border-[#FF6767] rounded-full"
					src={assets.user_image}
					alt="User"
				/>
				<h3 className="mt-2 font-semibold text-lg">Sundar Gurung</h3>
				<span className="text-sm text-white/80">sundargurung360@gmail.com</span>
			</div>
			<div className="bg-[#FF6767] text-white w-64 h-full p-5 md:flex flex-col justify-between mt-14 rounded-tr-xl ">
				<div className="">
					{/* User Profile Centered */}

					{/* Navigation Links */}
					<ul className="space-y-3 mt-25">
						{sidebarLinks.map((link) => (
							<li key={link.id}>
								<NavLink
									to={link.link}
									// Use className as a function to conditionally apply active styles
									className={({ isActive }) =>
										`flex items-center gap-3 px-3 py-2 rounded transition ${
											isActive
												? "bg-white text-gray-700" // active route styles
												: "hover:bg-white hover:text-gray-700 text-white" // inactive route styles with hover
										}`
									}
								>
									<span className="text-lg">
										<link.icon />
									</span>
									{link.name}
								</NavLink>
							</li>
						))}

						<li>
							<button className="flex items-center gap-3 hover:bg-white/20 px-3 py-2 rounded transition w-full">
								<IoMdLogOut size={20} />
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default SideBar;
