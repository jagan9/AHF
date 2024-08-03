import React from 'react';
import Typography from '@material-ui/core/Typography';
import people from '../Media/people.jpg';
import people1 from '../Media/people1.jpg';
import people2 from '../Media/people2.jpg';

class Donate extends React.Component {
	render() {
		return (
			<div style={{padding:"0px 20px"}}>
				<div style={{backgroundColor:"#c5426a",
				textAlign:"center",
				color:"#fff",
				padding:"30px 10px "}}> 
				<Typography variant="h5">Donate to AHF for Helping Poor & Needy During Covid-19 Pandemic.</Typography>
				</div>
				<br/>
				<div>
				<strong>Donate to AHF's Mega Relief Activities Against COVID-19 And Help Migrant Labourers, Workers & Needy Families:</strong>

				<p>
				 <strong>Activities In a Nutshell:</strong><br/>
				- Grocery Distribution<br/>
				- Food Packets Distribution<br/>
				- Blood Collection Through Blood Donation Camps<br/>
				- Screening of Citizens with the help of Govt. authorities.<br/>
				- Coordination with Doctors For The Medical Help<br/>
				- Creating A Pool Of Volunteers & Doctors.<br/>
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
				<br/>
				</div>
				<div style={{width:"100%",display:"flex",justifyContent:"center"}}>
				<iframe allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/azad-hind-fauz-1" style={{maxWidth: "500px", minWidth: "250px", maxHeight:"none!important"}} width="100%"></iframe>
			    </div>
			</div>
		)
	}
}

export default Donate