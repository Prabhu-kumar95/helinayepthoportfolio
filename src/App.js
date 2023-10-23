
import './App.css';
import Home from './Pages/Home'; 
import AboutMe from './Pages/AboutMe';
import { Routes,Route } from 'react-router-dom';
import BasicTabs from './Pages/BasicTabs';
import HireMe from './Pages/HireMe';
import NavMenu from './NavComponents/Navbar';


function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Routes>
      <Route exact path="/" Component={Home} /> 
      <Route exact path="/Gallery" Component={BasicTabs} /> 
      <Route exact path="/Aboutme" Component={AboutMe} /> 
      <Route exact path="/Hireme" Component={HireMe} /> 
      
       </Routes>
        
    </div>
  );
}

export default App;
