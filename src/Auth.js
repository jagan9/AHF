import React from 'react';
import firebase from './firebase.js';
import {Redirect} from 'react-router-dom';


function Auth(props) {

	const [logged, setLogged] = React.useState(null);
	const [admin, setadmin] = React.useState("");

	firebase.auth().onAuthStateChanged(user=>{
		if(user){
			setadmin(user.email);
			setLogged(true);
		}
		else{
			setLogged(false);
		}
	})

	if(props.auth === "admin"){
		if(logged === null){
			return "loading..";
		}
		else if(admin==="azadhindfauj.org@gmail.com"){
			return props.children;
		}
		else{
			return <Redirect to="/home"/>
		}
	}

	if(props.auth === "auth"){
		if(logged === null){
			return "loading...";
		}
		else if(logged){
			return <Redirect to="/home"/>;
		}
		else{
			return props.children;
		}
	}
	else{
		if(logged === null){
			return "loading...";
		}
		else if(logged){
			return props.children;
		}
		else{
			return <Redirect to="/home"/>;
		}
	}

}

export default Auth;