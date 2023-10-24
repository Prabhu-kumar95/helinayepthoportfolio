import React from "react";
import { Link } from "react-router-dom";
import Navlogo from "../Images/Logo.svg"
const NavMenu = () => {
  return (
    <div className="main-nav">
<div className="logoarea">
  <img
    className="logo"
    src={Navlogo}
    alt="..."
  ></img>
</div>

<div className="menu-link mobile-menu-link">
  <ul>
    <li>
      <Link to="/" >
        <button  type="button" class="btn btn-light" style={{color:"aqua", background:"none", marginLeft:"450px",width:"100px",border:"solid 1px",borderRadius:"5px" }} className="heading1">
          Home
          </button>
      </Link>
    </li>
    <li>
      <Link to="/Gallery">
        <button  class="btn btn-light" style={{color:"aqua", background:"none", marginLeft:"80px",width:"100px",border:"solid 1px",borderRadius:"5px" }} className="heading">
          Gallery
        </button>
      </Link>
    </li>
    <li>
      <Link to="/Aboutme">
        <button  class="btn btn-light" style={{color:"aqua", background:"none", marginLeft:"80px",width:"100px",border:"solid 1px",borderRadius:"5px" }} className="heading">
          AboutMe
        </button>
      </Link>
    </li>
    <li>
      <Link to="/Hireme">
        <button  class="btn btn-light" style={{color:"aqua", background:"none", marginLeft:"80px",width:"100px",border:"solid 1px",borderRadius:"5px" }} className="heading">
          HireMe
        </button>
      </Link>
    </li>
    
  </ul>
</div>

</div> 


  );
};
  
export default NavMenu;
