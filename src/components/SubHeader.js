import React from "react";
import { Grid } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CalorieFilter from "./CalorieFilter";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  subheader: {
    paddingTop: 10,
  },
  input: {
    borderBottom: "2px solid #3f51b5",
    marginTop:8,
    
    padding: 2,
  },
}));

const SubHeader = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item>
        <CalorieFilter />
      </Grid>
      <Grid item>
        <InputBase
        
          type="text"
          placeholder="Search"
          className={classes.input}
          style={{}}
        />
      </Grid>
    </>
  );
};
export default SubHeader;
