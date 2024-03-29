import React from "react";
import Aboutlogo from "../Images/Rectangle (1).png"
import Worklogo from "../Images/Rectangle.svg"
import Mywork1 from "../Images/Helina Yeptho (1)/0L0A1625 1.png"
import Mywork2 from "../Images/Helina Yeptho (1)/0L0A2221 1.png"
import Mywork3 from "../Images/Helina Yeptho (1)/0L0A2539 1.png"
import Mywork4 from "../Images/Helina Yeptho (1)/0L0A2636 1.png"
import aboutme from "../Images/aboutme.jpg"

function AboutMe() {
    return ( 
        < div>
      <div className="Aboutmecontainer">
      <div>
                <img style={{marginLeft:"10px", marginTop:"30px", height:"115px", width:"138px"}} src={Aboutlogo} alt="..."/>
            </div>
         <p className="Atext">Hi, It's Me</p>
    </div>
    <div className="cardcontainer">
    <div class="card mb-3" style={{maxwidth:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img  src={aboutme} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" >
        <h1 class="aboutcard-title" >Helina Yepthio</h1>
        <h3 class="aboutcard-text" >I am Passionate in Photography, This is always my desire to be a phptographer.I enjoy clicking and I never get bored in this beautiful career.I cover all types of photos but specialized in wedding photography and clicking portraits.I am Passionate in Photography, This is always my desire to be a phptographer.</h3>
        <button style={{width:"150px"}} type="button" class="btn btn-success">Read More</button>
      </div>
    </div>
  </div>
</div>
 
</div>
<div className="Aboutmefootertext" style={{display:"flex",justifyContent:"center"}}>
<p className="AMtext">
    "If passion drives you,"
  </p>
 
</div>
<div className="Aboutmefootertext">
<p className="AMtext-b">
    "let reason hold the reins"
  </p>
</div>
<div className="Aboutmefootertext3">
<p>
    ---  The Helina Yeptho Photography ---
  </p>
</div>
<div className="myworklogo" style={{display:"flex",justifyContent:"center"}}>
<div>
                <img style={{ marginTop:"100px", height:"115px", width:"138px"}} src={Worklogo} alt="..."/>
            </div>
</div>
<div className="mywork">
  <p className="myworktext">My Work</p>
</div>
<div class="row  row-cols-1 row-cols-md-4 g-4" >
  <div class="col">
    <div class="card1 h-100">
      <img src={Mywork2} class="card-img-top" alt="..."/>
      <div class="cardbody">
        <h1 class="card-title1">Portraits</h1>
       
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card1 h-100">
      <img src={Mywork4} class="card-img-top" alt="..."/>
      <div class="cardbody">
        <h1 class="card-title1">Couple</h1>
        
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card1 h-100">
      <img src={Mywork1} class="card-img-top" alt="..."/>
      <div class="cardbody">
        <h1 class="card-title1">Wedding</h1>
       
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class="card1 h-100">
      <img src={Mywork3} class="card-img-top" alt="..."/>
      <div class="cardbody">
        <h1 class="card-title1">Event</h1>
       
      </div>
      
    </div>
  </div>
</div>
<div className="Aboutmefootertext2">
<p className="AMtext-1">
    See My Light's Stories,
  </p>
 
</div>
<div className="Aboutmefootertext2">
<p className="AMtext-2">
    Will Make Same One For You.
  </p>
</div>
<div className="Aboutmefootertext4">
<p>
    ---  The Helina Yeptho Photography ---
  </p>
</div>
      </div>
    );
  }
  
  export default AboutMe;