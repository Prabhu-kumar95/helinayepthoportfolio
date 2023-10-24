import React from "react";
import Slider from "react-slick";
import SliderImg1 from "../Images/Helina Yeptho/Bride 1 1.png" 
import SliderImg2 from "../Images/Helina Yeptho/Bride 1.png"
import SliderImg3 from "../Images/Helina Yeptho/Laydies 1.png"
import SliderImg4 from "../Images/Helina Yeptho/bridegroom 1.png"
import SliderImg5 from "../Images/Helina Yeptho/wedding table 1.png"
import SliderImg6 from "../Images/Helina Yeptho/Bride 1.png"

function SliderImage (){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        
        autoplaySpeed:2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
       
      };
      return (  
        <div>
         <div className="Imagecontainer">
        <Slider {...settings}>
          <div>
            <img src={SliderImg1} className="Image" alt=""/>
          </div>
          <div>
          <img src={SliderImg2} className="Image" alt=""/>
          </div>
          <div>
          <img src={SliderImg3} className="Image" alt=""/>
          </div>
          <div>
          <img src={SliderImg4} className="Image" alt=""/>
          </div>
          <div>
          <img src={SliderImg5} className="Image" alt=""/>
          </div>
          <div>
          <img src={SliderImg6} className="Image" alt=""/>
          </div>
        </Slider> 
    
        </div>
       
        </div> 
        
      );
}
export default SliderImage; 
