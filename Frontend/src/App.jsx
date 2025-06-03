import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import HelpPage from "./pages/HelpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyTaskPage from "./pages/MyTaskPage";
import SettingPage from "./pages/SettingPage";
import SignupPage from "./pages/SignupPage";
import TaskCategoriesPage from "./pages/TaskCategoriesPage";
import ViewTaskPage from "./pages/ViewTaskPage";
import VitalTaskPage from "./pages/VitalTaskPage";
import AccountInfoPage from "./pages/AccountInfoPage";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./auth/PrivateRoute";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<SignupPage />} />
			<Route path="/dashboard" element={<DashboardPage />} />
			<Route
				path="/vital-task"
				element={
					<PrivateRoute>
						<VitalTaskPage />
					</PrivateRoute>
				}
			/>
			<Route path="/my-task" element={<MyTaskPage />} />
			<Route path="/task-categories" element={<TaskCategoriesPage />} />
			<Route path="/setting" element={<SettingPage />} />
			<Route path="/help" element={<HelpPage />} />
			<Route path="/view-task/:id" element={<ViewTaskPage />} />
			<Route path="/account-info" element={<AccountInfoPage />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default App;
