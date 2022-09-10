import './App.css';
import Home from './components/Home';
import { useNavigate,Route, Routes} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Skillset from './components/Skillset';

function App() {
  const navigate = useNavigate();
  return (
    <>
    <div className="App">
        
        <nav className='main-nav'>
    <div className='logo'>
        <h2>
            <span className='name'># Onkar Deolankar</span>
        </h2>
    </div>
    <div className='nav-details'>
        <ul className='navbars'>
            <li onClick={()=>{navigate('/');}} className='nav-user'>HOME</li>
            <li onClick={()=>{navigate('/AboutUs');}} className='nav-user'>ABOUT</li>
            <li onClick={()=>{navigate('/Skillset');}} className='nav-user'>SKILLS</li>
            <li onClick={()=>{navigate('/Projects');}} className='nav-user'>PROJECTS</li>
            <li onClick={()=>{navigate('/ContactUs');}} className='nav-user'>CONTACT</li>
        </ul>
    </div>
    </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Skillset" element={<Skillset/>} />
          {/* <Route path="/ContactUs" element={<ContactUs/>} /> */}
        </Routes>    
    </div>
    </>
  );
}

export default App;
