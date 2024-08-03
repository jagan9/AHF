import React from 'react';
import Typography from '@material-ui/core/Typography';
import Header from '../Components/Header.js';
import flag from '../Media/flag.png';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import MainBody from '../Components/MainBody.js';
import Donate from '../Components/Donate.js';
import KnowUs from '../Components/KnowUs.js';
import JoinAHF from '../Components/JoinAHF.js';
import Auth from '../Auth.js';
import firebase from '../firebase.js';
import LoginPage from '../Components/LoginPage.js';
import PasswordSent from '../Components/passwordSent.js';
import Users from '../Components/Users.js';
import Footer from '../Components/Footer.js'


export default function MainFragment(props) {

	const [logedin, setLogedin] = React.useState(null);
	const [admin, setadmin] = React.useState("");

	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			setadmin(user.email);
			setLogedin(true);
		}
		else {
			setLogedin(false);
		}
	})

	let notices = [];
	firebase.firestore().collection("NOTICES").get().then(res => {
		if (!res.empty()) {
			res.forEach(data => {
				notices.push(data);
			});

			notices.sort((a, b) => a.created_at - b.created_at);
		}
	}).catch(err => {
		console.log(err);
	})

	const logoutUser = () => {
		firebase.auth().signOut().then(() => {
			console.log("logged out");
			setLogedin(false);
		}).catch(err => {
			console.log(err);
		})
	}

	return (
		<div>
			<Header
				admin={admin}
				logedin={logedin}
				logoutUser={logoutUser} />
			<br /><br /><br />
			<Router>
				<Switch >

					<Route path="/home" >
						<MainBody admin={admin} />
					</Route>

					<Route path="/know_us">
						<KnowUs />
					</Route>

					<Route path="/users">
						<Auth auth="admin">
							<Users />
						</Auth>
					</Route>

					<Route path="/Login">
						<Auth auth="auth">
							<LoginPage />
						</Auth>
					</Route>

					<Route path="/join_ahf">
						<Auth auth="auth">
							<JoinAHF />
						</Auth>
					</Route>

					<Route path="/forgot_password">
						<Auth auth="auth">
							<PasswordSent />
						</Auth>
					</Route>

					<Route path="/donate">
						<Donate />
					</Route>
					<Redirect to="/home">
					</Redirect>
				</Switch>
			</Router>
			<br />
			<Footer />
		</div>
	)
}