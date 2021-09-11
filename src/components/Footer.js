import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop:20,
    height:"30%"
    
  },
});

const  Footer = () =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <Typography variant="overline" color="secondary" component="span">Footer Area</Typography>
      
    </BottomNavigation>
  );
}
export default Footer;