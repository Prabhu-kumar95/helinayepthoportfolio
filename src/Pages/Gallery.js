import React from "react";
import Gallerylogo from "../Images/Rectangle (3).png"

function Gallery (){
    return(
        <div>
         <div className="gallerylogo">
            <div>
                <img style={{ marginTop:"10px", height:"115px", width:"138px"}} src={Gallerylogo} alt="..."/>
            </div>
          
         </div> 
         <div className="gallerytext">
         <p style={{fontSize:"40px",marginTop:"-50px"}} >Gallery</p>
         </div>
       

        </div>
    )
}
export default Gallery;