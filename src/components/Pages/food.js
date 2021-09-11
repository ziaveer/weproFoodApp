import React from "react";
import foodData from '../../data/data';

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
    listDesign: {
      marginTop: 10,
    },
    media: {
        height:300,
      borderRadius: 3,
    },
    text: {},
  }));


const Food = (props) =>{
    const classes = useStyles();
    console.log(props.selectedFoodItem);
    
    console.log(foodData);
    
    
    


    return <Grid
    container
    item
    xs={12}
    sm={12}
    md={12}
    spacing={2}
    className={classes.listDesign}
  >
    {props.selectedFoodItem.map((dish) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={dish.foodName}>
          <Card
            className={classes.root}
           
          >
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="#76ff03" component="span">
                {`Food Name - ${dish.foodName}`}
              </Typography>
              <CardContent
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="primary" component="span" wrap>
                { `food type - ${dish.foodType ?dish.foodType:'Unknown' }`}
              </Typography>
              </CardContent>
              <Typography variant="h6" color="primary" component="span">
                {dish.protein}
              </Typography>
              <Typography variant="h6" color="primary" component="span">
                {`Energy ${dish.calories}`}
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      );
    })}
  </Grid>

}
export default Food;