import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
	const token = localStorage.getItem("token");
	// console.log(token);

	const location = useLocation();

	if (token) return children;

	return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
