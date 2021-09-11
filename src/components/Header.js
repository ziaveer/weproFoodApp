import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    maxWidth: 65,
  },
  title: {
    flexGrow: 1,
  },
  rightItem:{
    flexDirection: "row-reverse",
  
      
  }
}));

export default function Header() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <img src="http://www.tizag.com/pics/htmlT/sunset.gif" alt="logo" className={classes.logo} />
            
        
        <Grid container className={classes.rightItem}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Logout</Button>
        </Grid>
        
          
        </Toolbar>
        
        
        
      </AppBar>
    </div>
  );
}
