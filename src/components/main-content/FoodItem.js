import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
    "&:hover": {
      background: "#D3D3D3",
    },
  },
  listDesign:{
      marginTop:10,
  },
  media: {
    borderRadius: 3,
  },
  text: {},
}));
const FoodItem = (props) => {
  console.log(props.foodItem);

  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={12} md={12} spacing={2} className={classes.listDesign}>
      {props.foodItem.map((restra) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={restra.restaurant} >
            <Card className={classes.root} onClick={()=> console.log(restra.restaurant)}>
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" color="primary" component="span">
                  {restra.restaurant}
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default FoodItem;
