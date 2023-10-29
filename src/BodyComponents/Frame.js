import React from "react";
import SliderImg1 from "../Images/Helina Yeptho/Bride 1 1.png" 
import SliderImg2 from "../Images/Helina Yeptho/Bride 1.png"
import SliderImg3 from "../Images/Helina Yeptho/Laydies 1.png"
import SliderImg4 from "../Images/Helina Yeptho/bridegroom 1.png"
import SliderImg5 from "../Images/Helina Yeptho/wedding table 1.png"
import Header from '../NavComponents/Header';


function Frame (){
    return(
        <div>
        <Header></Header>
        <div className="grid-container">
           
       <div className="Img1" > <img  className="Image1" src={SliderImg1} alt="..."/> </div>
       <div className="Img2"> <img className="Image2" src={SliderImg3} alt="..."/></div>
       <div className="Img3"><img  className="Image3" src={SliderImg2} alt="..."/></div>
       <div className="Img4"><img  className="Image4" src={SliderImg4} alt="..."/></div>
       <div className="Img5"><img  className="Image5" src={SliderImg5} alt="..."/></div>
         
       
        </div>
        <div className="Footertext">
      <p className="Ftext">Leave Capturing Your Life Story To Me</p>
        </div>
        <div className="Footertext1">
        <p>---- The Helina Yeptho Photography ----</p>
          </div>
        </div>
    )
}
export default Frame