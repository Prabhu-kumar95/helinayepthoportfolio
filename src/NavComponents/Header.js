import React from "react";
import headerlogo from "../Images/Rectangle.png"


const Header  =()=>{
return(
    <div>
<div className="headercontainer">
  <div className="hlogo">
<img
          className="headerlogo"
          src={headerlogo}
          alt="..."
        ></img>
        </div>
</div>
<div className="headertext">
<p>Hello, I am  <b style={{color:'aqua'}}>Helina Yeptho</b></p>
</div>
<div className="headertext1">
<p>Pro Photographer</p>
</div>
</div>
)
}
export default Header;