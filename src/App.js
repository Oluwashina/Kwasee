import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/home';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';


function App() {
  return (
    <div>
          <Router>
           <NavbarComponent />
            <Routes>
                <Route path="/" exact element={ <HomePage />} />
            </Routes>
            <FooterComponent />
          </Router>
    </div>
  );
}

export default App;
