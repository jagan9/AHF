import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase,{firebaseAuth} from '../firebase.js';




class JoinAHF extends React.Component {


	constructor(props){
		super(props);
		this.state={
			open:false,
			bopen:false,
			error:"",
			show_permanent_address:true,
			first_name:"",
			last_name:"",
			age:"",
			profession:"",
			phone_number:"",
			email:"",
			gender:"male",
			state__:"Telangana",
			district:"",
			village:"",
			mandel:"",	
			address1:"",
			state2:"",
			district2:"",
			village2:"",
			mandel2:"",
			address12:"",
			password:"",
			rpassword:""
		}
		this.show_address=this.show_address.bind(this);
		this.submitForm=this.submitForm.bind(this);
	}

	show_address(){
		//console.log(this.state);
		let a=this.state.show_permanent_address;
		this.setState({show_permanent_address:!a})
	}

	handleClick(){
		this.setState({open:true})
	}

	handleClose(event, reason){
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open:false})
    };



	submitForm(){

		this.state.first_name_error=null;
		this.state.last_name_error=null;
		this.state.age_error=null;
		this.state.profession_error=null;
		this.state.phone_number_error=null;
		this.state.email_error=null;
		this.state.state_error=null;
		this.state.district_error=null;
		this.state.village_error=null;
		this.state.mandel_error=null;
		
		this.state.address1_error=null;
		this.state.district2_error=null;
		this.state.mandel2_error=null;
		this.state.state2_error=null;
		this.state.village2_error=null;
		this.state.address12_error=null;
		
		this.state.password_error=null;
		this.state.rpassword_error=null;

		var validData=true;

		if(this.state.first_name===""){
			this.setState({
				first_name_error:"required",
			});
			validData=false;
		}
		else if(this.state.first_name.length<4){
			this.setState({
				first_name_error:"Name must be 4 characters",
			});
			validData=false;
		}
		else if(this.state.first_name.length>15){
			this.setState({
				first_name_error:"Enter only 15 characters",
			});
			validData=false;
		}


		if(this.state.last_name===""){
			this.setState({
				last_name_error:"required",
			});
			validData=false;
		}
		else if(this.state.last_name.length<4){
			this.setState({
				last_name_error:"Name must be 4 characters",
			});
			validData=false;
		}
		else if(this.state.last_name.length>15){
			this.setState({
				last_name_error:"Enter only 15 characters",
			});
			validData=false;
		}

		if(this.state.age===""){
			this.setState({
				age_error:"required",
			});
			validData=false;
		}
		if(this.state.age.length>2){
			this.setState({
				age_error:"please enter correct age",
			});
			validData=false;
		}


		if(this.state.profession===""){
			this.setState({
				profession_error:"required",
			});
			validData=false;
		}
		else if(this.state.profession.length<4){
			this.setState({
				profession_error:"Name must be 4 characters",
			});
			validData=false;
		}
		else if(this.state.profession.length>15){
			this.setState({
				profession_error:"Enter only 15 characters",
			});
			validData=false;
		}


		var phoneno = /^\d{10}$/;
		if(this.state.phone_number===""){
			this.setState({
				phone_number_error:"required",
			});
			validData=false;
		}
		else if(this.state.phone_number.match(phoneno)){

		}else{
			this.setState({
				phone_number_error:"Please enter valid number",
			});
			validData=false;
		}


		if(this.state.email===""){
			this.setState({
				email_error:"required",
			});
			validData=false;
		}
		else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)){

		}
		else{
			this.setState({
				email_error:"please enter valid email",
			});
			validData=false;
		}

		if(this.state.state__===""){
			this.setState({
				state_error:"required",
			});
			validData=false;
		}
		else if(this.state.state__.length>15){
			this.setState({
				state_error:"please enter correct state",
			});
			validData=false;
		}

		if(this.state.district===""){
			this.setState({
				district_error:"required",
			});
			validData=false;
		}
		else if(this.state.district.length>15){
			this.setState({
				district_error:"please enter correct state",
			});
			validData=false;
		}

		if(this.state.mandel===""){
			this.setState({
				mandel_error:"required",
			});
			validData=false;
		}
		else if(this.state.mandel.length>15){
			this.setState({
				mandel_error:"please enter correct state",
			});
			validData=false;
		}

		if(this.state.village===""){
			this.setState({
				village_error:"required",
			});
			validData=false;
		}
		else if(this.state.village.length>15){
			this.setState({
				village_error:"please enter correct state",
			});
			validData=false;
		}
 

		if(this.state.address1===""){
			this.setState({
				address1_error:"required",
			});
			validData=false;
		}
		else if(this.state.address1.length<5 || this.state.address1.length>200){
			this.setState({
				address1_error:"please enter valid address",
			});
			validData=false;
		}


	

		if(this.state.password===""){
			this.setState({
				password_error:"required",
			});
			validData=false;
		}
		else if(this.state.password.length<6){
			this.setState({
				password_error:"Password must be 4 characters",
			});
			validData=false;
		}
		else if(this.state.password.length>10){
			this.setState({
				password_error:"password limit exceeded",
			});
			validData=false;
		}

		if(this.state.password!=this.state.rpassword){
			this.setState({
				rpassword_error:"password doesnt matched",
			});
			validData=false;
		}



		
		if(this.state.show_permanent_address){
			if(this.state.state2===""){
			this.setState({
				state2_error:"required",
			});
			validData=false;
		}
		else if(this.state.state2.length>15){
			this.setState({
				state2_error:"please enter correct state",
			});
			validData=false;
		}

		if(this.state.district2===""){
			this.setState({
				district2_error:"required",
			});
			validData=false;
		}
		else if(this.state.district2.length>15){
			this.setState({
				district2_error:"please enter correct state",
			});
			validData=false;
		}

		if(this.state.mandel2===""){
			this.setState({
				mandel2_error:"required",
			});
			validData=false;
		}
		else if(this.state.mandel2.length>15){
			this.setState({
				mandel2_error:"please enter correct state",
			});
			validData=false;
		}

		if(this.state.village2===""){
			this.setState({
				village2_error:"required",
			});
			validData=false;
		}
		else if(this.state.village2.length>15){
			this.setState({
				village2_error:"please enter correct state",
			});
			validData=false;
		}


		if(this.state.address12===""){
			this.setState({
				address12_error:"required",
			});
			validData=false;
		}
		else if(this.state.address12.length<15 || this.state.address12.length>200){
			this.setState({
				address12_error:"please enter valid address",
			});
			validData=false;
		}


	
		}else{
			this.state.state2=this.state.state__;
			this.state.district2=this.state.district;
			this.state.village2=this.state.village;
			this.state.mandel2=this.state.mandel;
			this.state.address22=this.state.address2;
			this.state.address12=this.state.address1;
			this.setState({
				ssss:true
			})
		}

		if(validData){
			this.setState({bopen:true})
			//console.log(this.state.first_name);
			let data={
			"last_name":this.state.last_name,
			"first_name":this.state.first_name,
			"age":this.state.age,
			"profession":this.state.profession,
			"phone_number":this.state.phone_number,
			"email":this.state.email,
			"gender":this.state.gender,
			"state__":this.state.state__,
			"district":this.state.district,
			"mandel":this.state.mandel,
			"village":this.state.village,
			"address1":this.state.address1,
			"state2":this.state.state2,
			"district2":this.state.district2,
			"mandel2":this.state.mandel2,
			"village2":this.state.village2,
			"address12":this.state.address12,
			};
			

			firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
			.then((res)=>{
				data["uid"]=res.user.uid;
				console.log(data);
				firebase.firestore()
				.collection("USERS")
				.doc(res.user.uid)
				.set(data)
				.then((res)=>{
					console.log("success");
					this.setState({bopen:false});
				})
				.catch((err)=>{
					this.setState({bopen:false});
					console.log("firestore error");
				})
			})
			.catch(err=>{
				this.setState({bopen:false});
				this.setState({error:err.code});
				this.setState({open:true});
			});
		}





	}


	render() {
		return (
			<div style={{margin:"0px"}}>
				<div style={{minHeight:"100px",backgroundColor:"#323a45"}}>
				<h2 style={{margin:"0px",
				color:"#fff",
				fontFamily:"sans-serif",
				textAlign:"center",
				paddingTop:"15px"}}>JOIN AHF REGISTRATION FORM</h2>
				<p style={{textAlign:"center",color:"#fff",paddingBottom:"20px"}}>To join AHF is simple. Just fill up this form and we will give you the contact person near to you who will help you.</p>
				</div>
				<div>


				<Paper elevation={3}
				 style={{margin:"10px 20px",padding:"30px 0px"}} >
				<div className="Applicant_information">
				<div style={{width:"70%",
				backgroundColor:"tomato",
				borderTopRightRadius:"30px",
				borderBottomRightRadius:"30px",
				color:"#fff",
				padding:"10px"}}>
				<Typography variant="subtitle1"> Applicant Information</Typography>
				</div>
				<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				First Name<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.last_name_error!=null}
				helperText={this.state.last_name_error}
				value={this.state.last_name}
				onChange={(e)=>this.setState({last_name:e.target.value})}
				style={{margin:"0px",
				}} 
				id="first_name"
				placeholder="First Name "  
				variant="outlined" />
				</div>

				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Last Name <span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.first_name_error!=null}
				helperText={this.state.first_name_error}
				value={this.state.first_name}
				onChange={(e)=>this.setState({first_name:e.target.value})}
				style={{margin:"0px",}} 
				id="first_name"
				placeholder="Last Name "  
				variant="outlined" />
				</div>
				</div>
				<br/>


				<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Age
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.age_error!=null}
				helperText={this.state.age_error}
				value={this.state.age}
				onChange={(e)=>this.setState({age:e.target.value})}
				style={{margin:"0px",
				}} 
				id="first_name"
				placeholder="Age" 
				type="number" 
				variant="outlined" />
				</div>

				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Profession
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.profession_error!=null}
				helperText={this.state.profession_error}
				value={this.state.profession}
				onChange={(e)=>this.setState({profession:e.target.value})}
				style={{margin:"0px",}} 
				id="first_name"
				placeholder="Profession"  
				variant="outlined" />
				</div>
				</div>
				<br/>


				<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Phone Number<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.phone_number_error!=null}
				helperText={this.state.phone_number_error}
				value={this.state.phone_number}
				onChange={(e)=>this.setState({phone_number:e.target.value})}
				style={{margin:"0px",
				}} 
				id="first_name"
				type="number"
				placeholder="Phone Number"  
				variant="outlined" />
				</div>

				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Email<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.email_error!=null}
				helperText={this.state.email_error}
				value={this.state.email}
				onChange={(e)=>this.setState({email:e.target.value})}
				style={{margin:"0px",}} 
				id="first_name"
				placeholder="Email"  
				variant="outlined" />
				</div>
				</div>
				<br/>
				


			
				<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Password<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.password_error!=null}
				helperText={this.state.password_error}
				value={this.state.password}
				onChange={(e)=>this.setState({password:e.target.value})}
				style={{margin:"0px",
				}} 
				id="first_name"
				type="password"
				placeholder="Enter Password"  
				variant="outlined" />
				</div>

				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Re-enter password<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.rpassword_error!=null}
				helperText={this.state.rpassword_error}
				value={this.state.rpassword}
				onChange={(e)=>this.setState({rpassword:e.target.value})}
				style={{margin:"0px",}} 
				id="first_name"
				type="password"
				placeholder="re-enter Password"  
				variant="outlined" />
				</div>
				</div>
				

				<div style={{margin:"20px 0px 40px 10px"}}>
				<Typography variant="body2" > Gender</Typography>
				<input 
				checked={this.state.gender=="male"?true:false}
				onChange={()=>this.setState({gender:"male"})}
				name="gender" 
				id="male" 
				type="radio" 
				value="male"/>
				<label for="male">Male</label>
				<input 
				checked={this.state.gender=="female"?true:false}
				onChange={()=>this.setState({gender:"female"})}
				name="gender" 
				id="Female" 
				type="radio" 
				value="Female"/>
				<label for="Female">Female</label>
				
				</div>
				</div>



				




                <div className="Present_address">
				<div style={{width:"70%",
				backgroundColor:"tomato",
				borderTopRightRadius:"30px",
				borderBottomRightRadius:"30px",
				color:"#fff",
				padding:"10px"}}>
				<Typography variant="subtitle1"> Present Address</Typography>
				</div>
				<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				State<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				 
				error={this.state.state_error!=null}
				helperText={this.state.state_error}
				value={this.state.state__}
				onChange={(e)=>this.setState({state__:e.target.value})}
				style={{margin:"0px",
				}} 
				id="first_name"
				placeholder="--select state-- "  
				variant="outlined" >
				
				</TextField>
				</div>

				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				District<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.district_error!=null}
				helperText={this.state.district_error}
				value={this.state.district}
				onChange={(e)=>this.setState({district:e.target.value})}
				style={{margin:"0px",}} 
				id="first_name"
				placeholder="--select District-- "  
				variant="outlined" />
				</div>
				</div>
				<br/>


				<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Mandel
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.mandel_error!=null}
				helperText={this.state.mandel_error}
				value={this.state.mandel}
				onChange={(e)=>this.setState({mandel:e.target.value})}
				style={{margin:"0px",
				}} 
				id="first_name"
				placeholder="Mandel"  
				variant="outlined" />
				</div>

				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Village
				</Typography>
				<TextField 
				fullWidth
				error={this.state.village_error!=null}
				helperText={this.state.village_error}
				value={this.state.village}
				onChange={(e)=>this.setState({village:e.target.value})} 
				style={{margin:"0px",}} 
				id="first_name"
				placeholder="Village"  
				variant="outlined" />
				</div>
				</div>
				<br/>


				<div style={{display:"flex",flexWrap:"wrap",padding:"0px 10px 0px 10px "}}>
				
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Address line 1<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.address1_error!=null}
				helperText={this.state.address1_error}
				value={this.state.address1}
				onChange={(e)=>this.setState({address1:e.target.value})} 
				style={{margin:"0px",
				}} 
				id="first_name"
				placeholder="Address line 1"  
				variant="outlined" />
				</div>

				
				</div>
				<br/>
				<br/>





                <div className="Permanent_address">
                <div style={{width:"70%",
				backgroundColor:"tomato",
				borderTopRightRadius:"30px",
				borderBottomRightRadius:"30px",
				color:"#fff",
				padding:"10px"}}>
				<Typography variant="subtitle1"> Permanent Address</Typography>
				</div>
				<div style={{padding:"20px 0px 10px 10px",display:"flex",alignItems:"center"}}>
				<input onChange={this.show_address} style={{height:"20px",width:"20px"}} type="checkbox" />
				<label >Same as Present Address</label>
				</div>
                {this.state.show_permanent_address && 


                <div>
				<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				State<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.state2_error!=null}
				helperText={this.state.state2_error}
				value={this.state.state2}
				onChange={(e)=>this.setState({state2:e.target.value})}
				style={{margin:"0px",
				}}
				placeholder="--select state-- "  
				variant="outlined" />
				</div>

				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				District<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.district2_error!=null}
				helperText={this.state.district2_error}
				value={this.state.district2}
				onChange={(e)=>this.setState({district2:e.target.value})}
				style={{margin:"0px",}} 
				placeholder="--select District-- "  
				variant="outlined" />
				</div>
				</div>
				<br/>


				<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Mandel
				</Typography>
				<TextField 
				fullWidth
				error={this.state.mandel2_error!=null}
				helperText={this.state.mandel2_error}
				value={this.state.mandel2}
				onChange={(e)=>this.setState({mandel2:e.target.value})} 
				style={{margin:"0px",
				}} 
				id="first_name"
				placeholder="Mandel"  
				variant="outlined" />
				</div>

				<div style={{flex:"1",width:"50%",
				minWidth:"250px",
				padding:"0px 10px 0px 10px",}}>
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Village
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.village2_error!=null}
				helperText={this.state.village2_error}
				value={this.state.village2}
				onChange={(e)=>this.setState({village2:e.target.value})}
				style={{margin:"0px",}} 
				id="first_name"
				placeholder="Village"  
				variant="outlined" />
				</div>
				</div>
				<br/>


				<div style={{display:"flex",flexWrap:"wrap",padding:"0px 10px 0px 10px "}}>
				
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Address line 1<span style={{color:"red"}}>*</span>
				</Typography>
				<TextField 
				fullWidth 
				error={this.state.address12_error!=null}
				helperText={this.state.address12_error}
				value={this.state.address12}
				onChange={(e)=>this.setState({address12:e.target.value})}
				style={{margin:"0px",
				}} 
				id="first_name"
				placeholder="Address line 1"  
				variant="outlined" />
				</div>

			
				</div>
                }
                </div>
                 
                

                <div style={{display:"flex",flexWrap:"wrap",padding:"0px 10px 0px 10px "}}>
				
				<Typography variant="body2" style={{margin:"0px",
				padding:"10px 0px 10px 0px "}}>
				Remark
				</Typography>
				<TextField 
				fullWidth 
				style={{margin:"0px",
				}} 
				id="first_name"
				placeholder="Remark"  
				variant="outlined" />
				</div><br/><br/>


                <Button  style={{backgroundColor:"#14bb46",
                marginLeft:"10px",
                padding:"10px 40px",
                color:"#fff"}}
                variant="contained"
                onClick={()=>this.submitForm()}
                >
                submit
       			</Button>
       			<a href="login" style={{paddingLeft:"10px"}}>
       			Alreay had account..
       			</a>
				</Paper>
				<Snackbar
		        anchorOrigin={{
		          vertical: 'bottom',
		          horizontal: 'left',
		        }}
		        open={this.state.open}
		        autoHideDuration={3000}
		        onClose={()=>this.handleClose()}
		        message={this.state.error}
		        action={
		          <>
		            <Button color="secondary" size="small" onClick={()=>this.handleClose()}>
		              UNDO
		            </Button>
		            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>this.handleClose()}>
		              <CloseIcon fontSize="small" />
		            </IconButton>
		          </>
		        }
		        />
		        <Backdrop style={{zIndex:"1",color:"orange"}}  open={this.state.bopen}>
			    <CircularProgress color="inherit" />
			    </Backdrop>
				</div>
				
			</div>
		)
	}
}

export default JoinAHF