import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import AnalysisDashBoard from "./components/AnalysisDashBoard/AnalysisDashBoard";
import PrivateRoute from "./commons/components/PrivateRoute";

import UserContext from "./commons/context/userContext";
import useAuth from "./commons/hooks/useAuth";

const App = () => {
	const {
		uid,
		client,
		accessToken,
		findingUserDone,
		logout,
		setCurrentUserCredentials,
	} = useAuth();

	return (
		<React.Fragment>
			<UserContext.Provider
				value={{
					loggedIn: !!accessToken,
					client,
					uid,
					findingUserDone,
					accessToken,
					logout,
					setCurrentUserCredentials,
				}}>
				<Router>
					<Header />
					<Switch>
						<Route path='/' component={Banner} exact />
						<Route path='/signup' component={Signup} />
						<Route path='/login' component={Login} />
						<PrivateRoute
							component={AnalysisDashBoard}
							path='/dashboard'
							token={accessToken}
						/>
					</Switch>
				</Router>
			</UserContext.Provider>
		</React.Fragment>
	);
};
export default App;
