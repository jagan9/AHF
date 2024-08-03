 import React from 'react';
import firebase from '../firebase.js';
import UserTable from './UserTable.js';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

class Users extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 users:[],
			 open:false
		}
	}

	componentDidMount(){
		this.setState({open:true});
		firebase.firestore().collection("USERS").get()
		.then(res=>{
			if(!res.empty){
				res.forEach((doc)=>{
					this.state.users.push(doc.data());
				})	
			}
			console.log(this.state.users);
			this.setState({
				open:false,
				update:true,
			})
		})
		.catch(err=>{
			console.log(err);
			this.setState({
				open:false,
				update:true,
			})
		})
	}

	render() {
		return (
			<div style={{height:"100vh"}}>

				{this.state.users.length>0 ?<UserTable data={this.state.users}/>:<h3 style={{textAlign:"center"}}>No users to display</h3>}
				<Backdrop style={{zIndex:"1",color:"orange"}}  open={this.state.open}>
			    <CircularProgress color="inherit" />
			    </Backdrop>
			</div>
		)
	}
}


export default Users;