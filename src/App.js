import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollWrapper/ScrollToTop";
import HomePage from './pages/Home/home';
import AboutPage from './pages/About/about';
import ServicesPage from './pages/Services/services';
import GalleryPage from './pages/Gallery/gallery';
import PageWrapper from './components/PageWrapper';


function App() {
  return (
    <div>
          <Router>
          <ScrollToTop>
            <Routes>
                <Route path="/" exact element={ 
                  <PageWrapper>
                     <HomePage />
                  </PageWrapper>
                 } />
                <Route path="/about-us"  element={ 
                   <PageWrapper>
                      <AboutPage />
                   </PageWrapper>} />
                <Route path="/our-services"  element={ 
                    <PageWrapper>
                        <ServicesPage />
                    </PageWrapper>
                } />
                <Route path="/gallery"  element={
                  <PageWrapper>
                      <GalleryPage />
                  </PageWrapper>
                 } />
            </Routes>
            </ScrollToTop>
          </Router>
    </div>
  );
}

export default App;
