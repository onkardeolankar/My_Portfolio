import './App.css';
import Home from './components/Home';
import { useNavigate,Route, Routes} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';

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
    <div className='menu-link'>
        <ul className='navbars'>
            <li onClick={()=>{navigate('/');}} className='li'>HOME</li>
            <li onClick={()=>{navigate('/AboutUs');}} className='li'>ABOUT</li>
            <li onClick={()=>{navigate('/Skills');}} className='li'>SKILLS</li>
            <li onClick={()=>{navigate('/Projects');}} className='li'>PROJECTS</li>
            <li onClick={()=>{navigate('/contact');}} className='li'>CONTACT</li>
        </ul>
    </div>
    </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Projects" element={<Projects/>} />
        </Routes>
        
    </div>
    </>
  );
}

export default App;
