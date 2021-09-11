import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import FoodItem from "./components/main-content/FoodItem";
import foodData from "./data/data";
import Footer from "./components/Footer";




const App = () => {
  const [foodItem, setFoodData] = useState([]);
  useEffect( ()=>{
    setFoodData(foodData);


  },[])
  
  
  return (
    <>
      <Header />
      <Grid container>
      
        <Grid item md={1} sm={1} />
        <Grid item xs={12} sm={12} md={12} >
        
            <FoodItem foodItem={foodItem}/>
        </Grid>

        <Grid item md={1} sm={1} />
      </Grid>
      <Footer/>
    </>
  );
};
export default App;
