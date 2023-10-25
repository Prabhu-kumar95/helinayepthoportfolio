import React from "react";
import Hirelogo from "../Images/Rectangle (2).png"
import Clientlogo from "../Images/client.svg"
import icons from "../Images/icons.svg"
import { Link } from "react-router-dom";

function HireMe (){
    return(
        <div>
<div className="hiremecontainer">
<div className="hiremelogo">
                <img style={{ marginTop:"60px", height:"115px", width:"138px"}} src={Hirelogo} alt="..."/>
            </div>
<div className="htext">
    <p className="hiremetext">Ready To Work With Me?</p>
</div>
<div className="hiremetext1">
<p>
    ---  The Helina Yeptho Photography ---
  </p>
</div>
<div className="formcontainer">
<div className="form">
    <div className="inputbox">
    <input className="inputbox1" placeholder="Name" type="text"/>
    <input className="inputbox1" placeholder="Email" type="email"/>
    <input className="inputbox1" placeholder="Phone Number" type="phone"/>
    </div>
    <div className="input-group mb-2">
  <input type="text" placeholder="Select Your Enquiry Type" style={{fontSize:"20px"}} class="form-control" aria-label="Text input with dropdown button"/>
  <button className="btn btn-outline-secondary dropdown-toggle" style={{backgroundColor:"white",width:"60px",border:"none",fontSize:"20px",borderRadius:"5px"}} type="button" data-bs-toggle="dropdown" aria-expanded="true"></button>
  <ul className="dropdown-menu dropdown-menu-end" style={{fontSize:"12px"}}>
    <li className="dropdown-item"> Action</li>
    <li className="dropdown-item"> Action</li>
    <li className="dropdown-item"> Action</li>
   
   
  </ul><div className="submitbtn"><button type="button" className="btn btn-primary">Submit</button></div>
</div>

</div>

</div> 
</div>
<div className="reviewtext">
<div>
                <img className="reviewlogo"  src={Clientlogo} alt="..."/>
            </div>
    <p className="reviewheading" ><b>Client's Experiecnce</b></p>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="reviewcard" >
      <img src="https://i.pinimg.com/originals/b9/c8/d4/b9c8d49730c698a2a9840eae14927ded.jpg" class="reviewcard-img-top" alt="..."/>
      <div class="reviewcard-body">
        <h5 class="card-title" style={{fontSize:"25px",color:"white", marginLeft:"-30px"}}>Nayara Shasa</h5>
        <p class="card-text" style={{fontSize:"15px",color:"white",marginLeft:"-20px"}}>Event Project Client</p>
        <div style={{borderBottom:"solid 1px",color:"silver",width:"92px",marginTop:"30px"}}></div>
        <p className="card-para" >It was a Great experience with helina. Wonderful coordination and had a 
fun clicking with them in & out 
it was perfect .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="reviewcard2">
      <img src="https://i.pinimg.com/474x/2c/eb/3f/2ceb3f537efe1b84807dd02af019c066.jpg" class="reviewcard2-img-top" alt="..."/>
      <div class="reviewcard-body2">
        <h5 class="card-title"  style={{fontSize:"25px",color:"white",marginLeft:"-40px"}}>Sophia Vergesra</h5>
        <p class="card-text" style={{fontSize:"15px",color:"white",marginLeft:"-20px"}}>Portrait Project Client</p>
        <div style={{borderBottom:"solid 1px",color:"silver",width:"154px",marginTop:"30px",marginLeft:"-30px"}}></div>
        <p className="card-para" >It was a Great experience with helina. Wonderful coordination and had a 
fun clicking with them in & out 
it was perfect .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="reviewcard">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/878/112/desktop-wallpaper-beautiful-girls-beautiful-girls-beautiful-girls-pic-foreign-girl-thumbnail.jpg" class="reviewcard-img-top" alt="..."/>
      <div class="reviewcard-body">
        <h5 class="card-title"  style={{fontSize:"25px",color:"white",marginLeft:"-20px"}}>Amelia Meisi</h5>
        <p class="card-text" style={{fontSize:"15px",color:"white",marginLeft:"-20px"}}>Wedding Project Client</p>
        <div style={{borderBottom:"solid 1px",color:"silver",width:"92px",marginTop:"30px"}}></div>
        <p className="card-para" >It was a Great experience with helina. Wonderful coordination and had a 
fun clicking with them in & out 
it was perfect .</p>
      </div>
    </div>
  </div>
  
 
</div>
<div className='Aboutmefootertext2'>
     <p className='AMtext1'>Their Dream Come True, Let's Make Yours</p>
    </div>
    <div className="Aboutmefootertext4">
<p>
    ---  The Helina Yeptho Photography ---
  </p>
</div>
<div className='gallerylogo1'>

   <img className='imagelogo' src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/photographer-girl-with-camera-drawing-artistic-sweet-birdie-studio.jpg' alt="...">
   </img>
</div>
<div className='galleryfooter'>
    <div className='gfooter'>
        <h2 style={{marginTop:"50px",marginLeft:"130px",color:"white"}}>Thanks For Scrolling Down</h2><span><h2 style={{marginTop:"50px",marginLeft:"700px",color:"white"}}>Follow Me On</h2></span>
       
       <div>
       
       <footer class="bg-light text-center text-white">
  </footer>
       </div>
        </div>
        <div style={{display:"flex"}}>
        <Link to={"/Hireme"} style={{marginLeft:"130px", marginTop:"15px", color:" rgba(35, 16, 44, 1)", width:"120px"}} type="button" class="btn btn-light">Go Top</Link><span> <img style={{marginLeft:"765px", marginTop:"15px"}} src={icons} alt="..."/></span>
        </div>
       
        <div style={{borderBottom:"solid 1px",color:"silver",width:"1119px",marginTop:"80px",marginLeft:"110px"}}></div>
        <p style={{fontSize:"15px",marginTop:"20px",marginLeft:"550px",color:"white"}}>All rights  reserved @ helinayeptho.Com  
</p>
<p style={{fontSize:"15px",marginLeft:"560px",color:"white"}}>Designed And Build By Sam Donald  
</p>
        </div>

        </div>
        
    )
}
export default HireMe;