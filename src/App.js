
import './App.css';
import Home from './Pages/Home'; 
import AboutMe from './Pages/AboutMe';
import { Routes,Route } from 'react-router-dom';
import BasicTabs from './Pages/BasicTabs';
import HireMe from './Pages/HireMe';
import NavBar from './NavComponents/Nav';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
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
