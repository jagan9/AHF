import React from 'react';
import flag from '../Media/flag.png';
import people from '../Media/people.jpg';
import people1 from '../Media/people1.jpg';
import people2 from '../Media/people2.jpg';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import firebase from '../firebase';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class MainBody extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 noticeText:"",
			 open:false,
		}
	}
	

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
	
		this.setState({open:false})
	  };

	submitNotice = () =>{
		this.state.noticeTextError = null;

		var validData=true;
		if(this.state.noticeText.length < 3){
			this.setState({
				noticeTextError:"please enter valid Notice"
			})
			validData=false;
		}

		if(validData){
			let data = {}
			data["text"]=this.state.noticeText;
			let date=new Date;
			let d=date.getUTCDate();
			data["created_at"] = d;
			firebase.firestore().collection("NOTICES").add(data).then(res=>{
				console.log("success");
				this.setState({
					noticeText:"",
					open:true,
				})
			}).catch(err=>{
				console.log(err)
			})	
		}
	}
	

	render() {
		return (
			<div>
				<h1 style={{textAlign:"center",
		backgroundColor:"#fcfaf7",
	    marginTop:"0px",
	    padding:"16px",
	    color:"black"}}>
		Namaskar</h1> 
		<div>
		{
		this.props.admin==="azadhindfauj.org@gmail.com" && 
		<div>
			<fieldset style={{padding:"10px ",margin:"10px 20px "}}>
				<legend>New Notice</legend>
				<TextField 
				fullWidth
				error={this.state.noticeTextError!=null}
				helperText={this.state.noticeTextError}
				value={this.state.noticeText}
				onChange={(e)=>this.setState({noticeText:e.target.value})}
				id="outlined-basic" 
				placeholder="Give a notice" 
				variant="outlined" />
				<br/>
				<br/>
				<button style={{padding:"10px 40px",
				outline:"none",
				border:"none",
				cursor:"pointer",
				borderRadius:"30px",
				backgroundColor:"#c9cce4"}}
				onClick={()=>this.submitNotice()}
				>Send</button>
			</fieldset>
			
	    </div>
		
		}
		<br/>
		<img style={{float:"left",
		maxHeight:"200px",
		maxWidth:"200px",
	    padding:"30px"}} src={flag} alt="flag" />
		<p style={{
	    margin:"20px 30px"}}>
		<strong style={{fontSize:"25px",textDecoration:"underline"}}>Azad Hind Fauz:</strong> <br/><br/> 
<p style={{marginTop:"0px",
	    textIndent:"50px",
	    textAlign: "justify"}}>- The Youth Army
After seeing the Name of organization we understand what actually it is.
This is An Army which Fight for Bharath Freedom From All Of It's Problems. In our Country we have so many intelligent mind's and experienced persons But country is still facing problems and still as Developing Nation. So ,we have to think once what Energy Country need for Freedom and That Army is only Youth. Because experienced persons not changed our Nation and they are not our Strength. The Nation's Strength is 60% of it's population and That is Our Youth.

Unfortunately, Youth were divided as Caste, Religion, Political organization's. In fact they were divided by some Pseudo Leaders for their benefits and made youth as followers to shout slogans, to shout Jindabaad only.
So, We should observe one thing, Our Countries strength also divided which is under selfish People.

The Bharath needs An Army,An Internal Army, An Youth Army to secure Nation from Pseudo Leaders.
Unlike Jindabaad followers, We Should Make Every Youth A Leader and Unite Youth As An Army in a systematic way, disciplinary manner Irrespective of Theirs Caste, Religion, Political organization's.

 For that Work only *Azad Hind Fauz* re-established To make Every Youth A Leader. Actually Azad Hind Fauz is established on *October 21st 1943* for Undivided India's (Hindustan) Freedom from Foreigners who are reasoned for our problems. Luckily we got freedom  from reasoned persons on 15th August 1947 but not get freedom from problems which are still continuing by our Pseudo Leaders. And Azad Hind Fauz disestablished on August 18th 1945 on the day of Netaji's missing.

To Fulfill Ambitions of Our great Ancestors, freedom fighters, *AZAD HIND FAUZ* was Re-established on February 19th 2021 In Sardar Patel College, Secunderabad, Hyderabad.
		</p></p>
		</div>
		<div style={{padding:"10px 30px"}}>
		<div style={{backgroundColor:"#c5426a",
				textAlign:"center",
				color:"#fff",
				padding:"30px 10px "}}> 
				<Typography variant="h5">Donate to AHF for Helping Poor  Needy During Covid-19 Pandemic.</Typography>
				</div>
				<br/>
				
				<strong>Donate to AHF's Mega Relief Activities Against COVID-19 And Help Migrant Labourers, Workers & Needy Families:</strong>
				
				<p>
				 <strong>Activities In a Nutshell:</strong><br/>
				- Grocery Distribution<br/>
				- Food Packets Distribution<br/>
				- Blood Collection Through Blood Donation Camps<br/>
				- Screening of Citizens with the help of Govt. authorities.<br/>
				- Coordination with Doctors For The Medical Help<br/>
				- Creating A Pool Of Volunteers  Doctors.<br/>
				</p>
				<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
				<img style={{padding:"5px"}} src={people} alt="image"/>
				<img style={{padding:"5px"}} src={people1} alt="image"/>
				<img style={{padding:"5px"}} src={people2} alt="image"/>
				</div>
				<strong>Precautions</strong>
				<p>- Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.<br/>
				- Make sure it covers both your nose, mouth and chin.<br/>
				- When you take off a mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask, or dispose of a medical mask in a trash bin.<br/>
				- Don’t use masks with valves.<br/>
				- Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak. Maintain an even greater distance between yourself and others when indoors. The further away, the better.<br/>
				- Make wearing a mask a normal part of being around other people. The appropriate use, storage and cleaning or disposal are essential to make masks as effective as possible.</p>
				</div>
				<div style={{width:"100%",display:"flex",justifyContent:"center"}}>
				<a href="/donate" style={{textDecoration:"none"}}>
				<button style={{backgroundColor:"tomato",
				color:"#fff",
				cursor:"pointer",
				border:"none",
				padding:"15px 40px ",borderRadius:"20px"}}>Donate</button></a>
				</div>
				<br/><br/>

				<div style={{padding:"0px 30px"}} className="Ambition">
				<h1 style={{margin:"0px",padding:"0px 10px"}}>Know US</h1>
				<p style={{height:"2px",width:"120px",margin:" 0px ",backgroundColor:"red"}}></p>
			    <p style={{borderLeft:"8px solid red",
			    padding:"16px",
			    fontFamily:"sans-serif",
			    textIndent:"20px",
			    textAlign:"Justify",
			    backgroundColor:"#cbf1f7"}}>
			   The Youth Army After seeing the Name of organization we understand what actually it is. This is An Army which Fight for Bharath Freedom From All Of It's Problems. In our Country we have so many intelligent mind's and experienced persons But country is still facing problems and still as Developing Nation. So ,we have to think once what Energy Country need for Freedom and That Army is only Youth. Because experienced persons not changed our Nation and they are not our Strength. The Nation's Strength is 60% of it's population and That is Our Youth. Unfortunately, Youth were divided as Caste, Religion, Political organization's. In fact they were divided by some Pseudo Leaders for their benefits and made youth as followers to shout slogans, to shout Jindabaad only. So, We should observe one thing, Our Countries strength also divided which is under selfish People. The Bharath needs An Army,An Internal Army, An Youth Army to secure Nation from Pseudo Leaders. Unlike Jindabaad followers, We Should Make Every Youth A Leader and Unite Youth As An Army in a systematic way, disciplinary manner Irrespective of Theirs Caste, Religion, Political organization's. For that Work only *Azad Hind Fauz* re-established To make Every Youth A Leader. Actually Azad Hind Fauz is established on *October 21st 1943* for Undivided India's (Hindustan) Freedom from Foreigners who are reasoned for our problems. Luckily we got freedom from reasoned persons on 15th August 1947 but not get freedom from problems which are still continuing by our Pseudo Leaders. And Azad Hind Fauz disestablished on August 18th 1945 on the day of Netaji's missing. To Fulfill Ambitions of Our great Ancestors, freedom fighters, *AZAD HIND FAUZ* was Re-established on February 19th 2021 In Sardar Patel College, Secunderabad, Hyderabad.
			    <a href="/know_us" style={{color:"red",textDecoration:"none"}} > ReadMore &gt; &gt;
			    </a>
			    <br/>
			    </p>
			</div>
			<div style={{backgroundColor:"#4c3733",color:"#fff",padding:"10px 30px "}}>
			<strong>Follow us</strong><br/><br/>
			<div>
			<a style={{color:"#fff",textDecoration:"none",paddingRight:"15px"}} href="https://twitter.com/azadhindfaujorg?s=08" target="_blank"><TwitterIcon/></a>
			<a style={{color:"#fff",textDecoration:"none",paddingRight:"15px"}} href="https://wa.me/message/W554WW5XWADHO1" targte="_blank"><WhatsAppIcon/></a>
			<a style={{color:"#fff",textDecoration:"none",paddingRight:"15px"}} href="https://www.instagram.com/azadhindfauz.ngo?r=nametag" target="_blank"><InstagramIcon/></a>
			<a style={{color:"#fff",textDecoration:"none",paddingRight:"15px"}}><FacebookIcon/></a>
			<a style={{color:"#fff",textDecoration:"none"}} href="https://youtube.com/channel/UCsuenNjWvFb4Rtqm5LBWxNA" target="_blank"><YouTubeIcon/></a>
			</div><br/><br/>
			<h4 style={{padding:"0px 0px 10px 0px",margin:"0px"}}>Contact US</h4>
			<a style={{color:"#fff"}} href="tel:9848427037">
			9848427037
			</a>

			</div>
			<Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={()=>this.handleClose()}
        message="success"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={()=>this.handleClose()}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>this.handleClose()}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
			</div>
		)
	}
}

export default MainBody;