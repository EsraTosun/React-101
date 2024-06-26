import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ component: Component, admin, ...rest }) {
	const { loggedIn, user } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) => {
				if (loggedIn) {
					if (admin && user.role !== "admin") {
						return <Redirect to={{ pathname: "/" }} />;
					} else {
						return <Component {...props} />;
					}
				} else {
					return <Redirect to={{ pathname: "/" }} />;
				}
			}}
		/>
	);
}

export default ProtectedRoute;
