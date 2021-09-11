import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import FoodItem from "./components/main-content/FoodItem";
import foodData from "./data/data";
import Footer from "./components/Footer";
import { Redirect, Route, Switch } from "react-router";
import Food from './components/Pages/food'






const App = () => {
  const [foodItem, setFoodData] = useState([]);
  const [selectedRestra, setselectedRestra] = useState('');
  const [selectedFoodItem, setselectedFoodItem] = useState([]);
  useEffect( ()=>{
    setFoodData(foodData);
    


  },[]);
  const onSelectRestaurantHandler =(selectedRestaurant, foodItems) =>{
    // console.log(selectedRestaurant,foodItems);
    setselectedRestra(selectedRestaurant);
    setselectedFoodItem(foodItems);
    
    


  }
  
  
  return (
    <>
      <Header />
      <Grid container>
      
        <Grid item md={1} sm={1} />
        <Grid item xs={12} sm={12} md={12} >


            
            <Switch>
        
      <Route path='/' exact>
      <FoodItem foodItem={foodItem} onSelectHandler={onSelectRestaurantHandler}/>

      </Route>
      
      <Route path='/food'>
        <Food selectedResturant={selectedRestra} selectedFoodItem={selectedFoodItem}/>

      </Route>
      </Switch>


          

          
        
            
        </Grid>

        <Grid item md={1} sm={1} />
      </Grid>
      <Footer/>
    </>
  );
};
export default App;
