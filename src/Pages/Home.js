import React from "react";

import Header from '../NavComponents/Header';
import SliderImage from '../BodyComponents/Slider'; 
import HomeFooter from "../BodyComponents/HomeFooter";
const Home = () => {
    return(
        <div>
      
      <Header></Header>
      <SliderImage></SliderImage>
      <HomeFooter ></HomeFooter>
        </div>
    )
}
export default Home;