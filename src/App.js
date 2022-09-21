import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollWrapper/ScrollToTop";
import HomePage from './pages/Home/home';
import AboutPage from './pages/About/about';
import ServicesPage from './pages/Services/services';
import GalleryPage from './pages/Gallery/gallery';
import PageWrapper from './components/PageWrapper';
import VirtualStylingPage from './pages/Packages/virtualStyling';
import BirthdayShootPage from './pages/Packages/birthdayShoot';
import MaternityShootPage from './pages/Packages/maternityShoot';
import PersonalShoppingPage from './pages/Packages/personalShopping';


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

                <Route path="/virtual-styling"  element={ 
                   <PageWrapper>
                      <VirtualStylingPage />
                   </PageWrapper>} />
                   
                 <Route path="/birthday-shoot"  element={ 
                   <PageWrapper>
                      <BirthdayShootPage />
                   </PageWrapper>} />

                   <Route path="/maternity-shoot"  element={ 
                      <PageWrapper>
                        <MaternityShootPage />
                      </PageWrapper>} 
                      />

                  <Route path="/personal-shopping"  element={ 
                      <PageWrapper>
                        <PersonalShoppingPage />
                      </PageWrapper>} 
                      />

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
