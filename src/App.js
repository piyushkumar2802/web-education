import './App.css';
import Home from './component/home.jsx';
import Header from './component/Home/Header.jsx';
import Footer from './component/Home/Footer.jsx';
import About from './component/About.jsx';
import Services from './component/Services.jsx';
import Technology from './component/Technology.jsx';
import SignUp from './component/Signup.jsx';
import Login from './component/Login.jsx';
import Privacy from './component/Privacy.jsx';
import Design from './component/Services/Design.jsx';
import Frontend from './component/Services/Frontend.jsx';
import Fullstack from './component/Services/Fullstack.jsx';
import Logout from './component/Services/Logout.jsx';
import Backend from './component/Services/Backend.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/web-design" element={<Design />} />
              <Route path="/front-end" element={<Frontend />} />
              <Route path="/fullstack-devloper" element={<Fullstack />} />
              <Route path="/back-end" element={<Backend />} />
              <Route path="logout" element={<Logout />} />
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
