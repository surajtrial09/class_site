import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Hero from './Components/Hero/Hero';
import Curriculam from './Components/Curriculam/Curriculam';
import Pricing from './Components/Pricing/Pricing';
import Art_area from './Components/Art_Areas/Art_area';
import Enroll from './Components/Enrollment/Enroll';
import Customer from './Components/Customer/Customer';
import Showcase from './Components/Showcase/Showcase';
import Art_workshop from './Components/Art_Workshop/Art_workshop';
import Formenroll from './Components/Formenroll/Formenroll';


// Import the other pages from your "Other_Pages" folder
import About from './Other_Pages/About/About';
import Classes from './Other_Pages/Classes/Classes';
import Contact from './Other_Pages/Contact/Contact';
import Tutorial from './Other_Pages/Tutorial/Tutorial';
import Workshop from './Other_Pages/Workshop/Workshop';
import Login from './Other_Pages/Login/Login'
import SignUp from './Other_Pages/Login/Signup';
import Forget from './Other_Pages/Login/Forget'


//Import the Workshop pages
import Painting from './Workshop_Pages/Painting/Painting';
import Landscapes from './Workshop_Pages/Landscapes/Landscapes';
import Glass from './Workshop_Pages/Glass_painting/Glass';
import Ceremic from './Workshop_Pages/Ceremic_work/Ceremic';
import Paper_craft from './Workshop_Pages/Paper_craft/Paper_craft';
import Mixed_media from './Workshop_Pages/Mix_media/Mixed_media';
import Abstract from './Workshop_Pages/Abstract/Abstract';
import Textile from './Workshop_Pages/Textile/Textile';
import Waste from './Workshop_Pages/Waste/Waste';
import Sculpture from './Workshop_Pages/Sculpture/Sculpture';
import Mosaic from './Workshop_Pages/Mosaic/Mosaic';
import Clay from './Workshop_Pages/Clay/Clay';

//Import Footer pages
import FaqPage from './FooterPages/FaqPage/FaqPage';
import Instructor from './FooterPages/Instructor/Instructor';
import Review from './FooterPages/Review/Review';

const App = () => {
  return (
    <>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={
          <>
            <Hero />
            <Curriculam />
            <Art_area />
            <Pricing />
            <Enroll />
            <Showcase />
            <Art_workshop />
            <Customer />
          </>
        } />
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Formenroll" element={<Formenroll/>}/>
        <Route path="/Forget" element={<Forget/>}/>
        <Route path="/ceremic" element={<Ceremic />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/painting" element={<Painting/>}/>
        <Route path="/abstract" element={<Abstract/>}/>
        <Route path="/clay" element={<Clay/>}/>
        <Route path="/glass" element={<Glass/>}/>
        <Route path="/landscapes" element={<Landscapes/>}/>
        <Route path="/mixed_media" element={<Mixed_media/>}/>
        <Route path="/mosaic" element={<Mosaic/>}/>
        <Route path="/paper_craft" element={<Paper_craft/>}/>
        <Route path="/sculpture" element={<Sculpture/>}/>
        <Route path="/textile" element={<Textile/>}/>
        <Route path="/waste" element={<Waste/>}/>
        {/* foorer routes */}
        <Route path="/FaqPage" element={<FaqPage/>}/>
        <Route path="/Instructor" element={<Instructor/>}/>
        <Route path="/Reviews" element={<Review/>}/>
      </Routes>
    </>
  );
}

export default App;
