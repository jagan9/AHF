import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import CheckSharpIcon from '@material-ui/icons/CheckSharp';
import GroupIcon from '@material-ui/icons/Group';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


function Header(props) {
  const classes = useStyles();

  const[state,setState] = React.useState({
    left:false,
  });
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <List> 
     <a href="/home"  style={{textDecoration:"none",color:"#000"}}>
          <ListItem button >
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
     </a>
     <a href="/know_us"  style={{textDecoration:"none",color:"#000"}}>
            <ListItem button >
            <ListItemIcon><HelpOutlineSharpIcon/></ListItemIcon>
            <ListItemText primary="Know us" />
          </ListItem>
     </a>
     {!props.logedin &&
      <a href="/join_ahf" style={{textDecoration:"none",color:"#000"}}>
            <ListItem button  >
            <ListItemIcon><CheckSharpIcon/></ListItemIcon>
            <ListItemText primary="Join AHF" />
          </ListItem>
     </a>
     }
     
      </List>
      <Divider />
      <List>
      <a href="/donate" style={{textDecoration:"none",color:"#000"}}>
            <ListItem button  >
            <ListItemIcon><MonetizationOnSharpIcon/></ListItemIcon>
            <ListItemText primary="Donate" />
          </ListItem>
     </a>
     {
      props.admin==="azadhindfauj.org@gmail.com" &&
      <a href="/users" style={{textDecoration:"none",color:"#000"}}>
            <ListItem button  >
            <ListItemIcon><GroupIcon/></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
     </a>
     }
     {props.logedin &&
          <ListItem button onClick={()=>props.logoutUser()}  >
          <ListItemIcon><ExitToAppIcon/></ListItemIcon>
          <ListItemText primary="Log out" />
          </ListItem>
     }

    
      </List>
      

    </div>
  );



  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar style={{backgroundColor:"tomato"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer("left", true)} />
            <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            AHF 
          </Typography>
          {
            props.logedin && 
            <Button onClick={()=>props.logoutUser()} color="inherit">Log out</Button>
          }
          {
            !props.logedin && 
            <>
            <a href="/join_ahf" style={{textDecoration:"none",color:"#fff"}}>
            <Button  color="inherit">Join AHF</Button>
            </a>
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;