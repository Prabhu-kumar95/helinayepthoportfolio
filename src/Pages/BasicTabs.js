import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Gallery from './Gallery';
import icons from "../Images/icons.svg"
import { Link } from 'react-router-dom';

import SliderImg1 from "../Images/Helina Yeptho/Bride 1 1.png" 
import SliderImg2 from "../Images/Helina Yeptho/Bride 1.png"

import SliderImg4 from "../Images/Helina Yeptho/bridegroom 1.png"
import SliderImg5 from "../Images/Helina Yeptho/wedding table 1.png"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Gallery></Gallery>
    <div className='tabcontainer'>
        
    <Box className="box">
      <Box sx={{ borderBottom: 1, borderColor: 'silver',borderRadius:"8px"}}>
      
        <Tabs  value={value} onChange={handleChange}  variant="scrollable"
  scrollButtons
  allowScrollButtonsMobile
  aria-label="scrollable force tabs example">
            
          <Tab sx={{fontSize:"18px",fontFamily:"sans-serif",marginLeft:"38px",color:"black"}} label="Portrait" {...a11yProps(0)} />
          <Tab  sx={{fontSize:"18px",fontFamily:"sans-serif",color:"black",marginLeft:"160px"}} label="Couple" {...a11yProps(1)} />
          <Tab  sx={{fontSize:"18px",fontFamily:"sans-serif",color:"black",marginLeft:"160px"}} label="Wedding" {...a11yProps(2)} />
          <Tab  sx={{fontSize:"18px",fontFamily:"sans-serif",color:"black",marginLeft:"160px"}} label="Event" {...a11yProps(3)} />
          
        </Tabs>
      </Box>
      
      <CustomTabPanel value={value} index={0}>
      <div className="grid-container1">
           
           <div className="PImg1" > <img  className="PImage1" src={SliderImg1} alt="..."/> </div>
           <div className="PImg2"> <img className="PImage2" src={SliderImg2} alt="..."/></div>
           <div className="PImg3"><img  className="PImage3" src={SliderImg2} alt="..."/></div>
           <div className="PImg4"><img  className="PImage4" src={SliderImg4} alt="..."/></div>
           <div className="PImg5"><img  className="PImage5" src={SliderImg5} alt="..."/></div>
           <div className="PImg6"><img  className="PImage6" src={SliderImg5} alt="..."/></div>
             
           
            </div>
     
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="grid-container1">
           
           <div className="PImg1" > <img  className="PImage1" src={SliderImg2} alt="..."/> </div>
           <div className="PImg2"> <img className="PImage2" src={SliderImg4} alt="..."/></div>
           <div className="PImg3"><img  className="PImage3" src={SliderImg1} alt="..."/></div>
           <div className="PImg4"><img  className="PImage4" src={SliderImg2} alt="..."/></div>
           <div className="PImg5"><img  className="PImage5" src={SliderImg4} alt="..."/></div>
           <div className="PImg6"><img  className="PImage6" src={SliderImg5} alt="..."/></div>
             
           
            </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="grid-container1">
           
           <div className="PImg1" > <img  className="PImage1" src={SliderImg5} alt="..."/> </div>
           <div className="PImg2"> <img className="PImage2" src={SliderImg2} alt="..."/></div>
           <div className="PImg3"><img  className="PImage3" src={SliderImg1} alt="..."/></div>
           <div className="PImg4"><img  className="PImage4" src={SliderImg4} alt="..."/></div>
           <div className="PImg5"><img  className="PImage5" src={SliderImg2} alt="..."/></div>
           <div className="PImg6"><img  className="PImage6" src={SliderImg5} alt="..."/></div>
             
           
            </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <div className="grid-container1">
           
           <div className="PImg1" > <img  className="PImage1" src={SliderImg4} alt="..."/> </div>
           <div className="PImg2"> <img className="PImage2" src={SliderImg2} alt="..."/></div>
           <div className="PImg3"><img  className="PImage3" src={SliderImg5} alt="..."/></div>
           <div className="PImg4"><img  className="PImage4" src={SliderImg4} alt="..."/></div>
           <div className="PImg5"><img  className="PImage5" src={SliderImg2} alt="..."/></div>
           <div className="PImg6"><img  className="PImage6" src={SliderImg5} alt="..."/></div>
             
           
            </div>

      </CustomTabPanel>
    </Box>
    
   
    </div>
    <div className='buttonsection'>
    <Link to={"/Hireme"} className='hiremebtn' type="button" class="hiremebtn btn-primary">Hire Me</Link>
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

   <img className='imagelogo' src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/photographer-girl-with-camera-drawing-artistic-sweet-birdie-studio.jpg' alt='...'>
   </img>
</div>
<div className='galleryfooter'>
    <div className='gfooter'>
        <h2 className='gheading'>Thanks For Scrolling Down</h2><span><h2 className='gheading1'>Follow Me On</h2></span>
        </div>
        <div style={{display:"flex"}}>
        <Link to={"/"}  type="button" class="btngbutton btn-light">Go Back</Link><span> <img className="socialicons"  src={icons} alt="..."/></span>
        </div>
        <div className='gline' ></div>
        <p className='gbottomtext1' >All rights  reserved @ helinayeptho.Com  
</p>
<p className='gbottomtext2'>Designed And Build By Sam Donald  
</p>
</div>
    </div>
  );
}


