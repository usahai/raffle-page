import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { TopNavBar, Home, Browse, Discover, MintItem, VoteDao, AccountSettings } from "./containers";

export default function App() {
	return (
		<Router>
			<TopNavBar />
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/home" />} />
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/browse">
					<Browse />
				</Route>
				<Route path="/discover">
					<Discover />
				</Route>
				<Route path="/mintanitem">
					<MintItem />
				</Route>
				<Route path="/votedao">
					<VoteDao />
				</Route>
				<Route path="/accountSettings">
					<AccountSettings />
				</Route>
			</Switch>
			{/* <BottomNavBar /> */}
		</Router>
	);
}
