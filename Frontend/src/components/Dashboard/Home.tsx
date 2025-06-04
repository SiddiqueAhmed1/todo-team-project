import CompleteTask from "../CompleteTask";
import DashboardTodo from "../DashboardTodo";
import TaskProgressbar from "../TaskProgressbar";
import UserList from "../UserList";

const Home = () => {
	return (
		<div>
			{/* User Overview Section */}
			<UserList />

			{/* Dashboard Widgets Container */}
			<div className="bg-white border border-gray-100 shadow mt-10 p-4 rounded-xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* To-Do List Panel */}
					<DashboardTodo />

					{/* Progress and Completed Tasks Panel */}
					<div>
						<TaskProgressbar />
						<CompleteTask />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
