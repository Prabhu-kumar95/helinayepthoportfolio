import React from "react";
import Gallerylogo from "../Images/Rectangle (3).png"

function Gallery (){
    return(
        <div>
         <div className="gallerylogo">
            <div>
                <img style={{marginLeft:"600px", marginTop:"30px", height:"115px", width:"138px"}} src={Gallerylogo} alt="..."/>
            </div>
            <p style={{fontSize:"40px", marginLeft:"600px", marginTop:"30px"}} >Gallery</p>
         </div>
        

        </div>
    )
}
export default Gallery;