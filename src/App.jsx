import React from "react";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom"; //
import "react-toastify/dist/ReactToastify.css";

// import Hero from "./Components/Hero/Hero";
import Curriculam from "./Components/Curriculam/Curriculam";
import Pricing from "./Components/Pricing/Pricing";
import Art_area from "./Components/Art_Areas/Art_area";
import Enroll from "./Components/Enrollment/Enroll";
import Customer from "./Components/Customer/Customer";
import Showcase from "./Components/Showcase/Showcase";
import Art_workshop from "./Components/Art_Workshop/Art_workshop";
import Formenroll from "./Components/Formenroll/Formenroll";
import Intro from "./Components/Intro/Intro";
// Import the other pages from your "Other_Pages" folder
import About from "./Other_Pages/About/About";
import Classes from "./Other_Pages/Classes/Classes";
import Contact from "./Other_Pages/Contact/Contact";
import Tutorial from "./Other_Pages/Tutorial/Tutorial";
import Workshop from "./Other_Pages/Workshop/Workshop";
import Login from "./Other_Pages/Login/Login";
import SignUp from "./Other_Pages/Login/SignUp";
import Forget from "./Other_Pages/Login/Forget";

//Import the Workshop pages
import Painting from "./Workshop_Pages/Painting/Painting";
import Landscapes from "./Workshop_Pages/Landscapes/Landscapes";
import Glass from "./Workshop_Pages/Glass_painting/Glass";
import Ceremic from "./Workshop_Pages/Ceremic_work/Ceremic";
import Paper_craft from "./Workshop_Pages/Paper_craft/Paper_craft";
import Mixed_media from "./Workshop_Pages/Mix_media/Mixed_media";
import Abstract from "./Workshop_Pages/Abstract/Abstract";
import Textile from "./Workshop_Pages/Textile/Textile";
import Waste from "./Workshop_Pages/Waste/Waste";
import Sculpture from "./Workshop_Pages/Sculpture/Sculpture";
import Mosaic from "./Workshop_Pages/Mosaic/Mosaic";
import Clay from "./Workshop_Pages/Clay/Clay";

//Import Footer pages
import FaqPage from "./FooterPages/FaqPage/FaqPage";
import Instructor from "./FooterPages/Instructor/Instructor";
import Review from "./FooterPages/Review/Review";
import Privacy from "./FooterPages/Privacy/Privacy";
import Blog from "./FooterPages/Blog/Blog";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/UserContext";
import Profile from "./Components/Profile/Profile";
import OTPInput from "./Other_Pages/Login/Otp";
import Resetpassword from "./Other_Pages/Login/Resetpassword"

const App = () => {
  return (
    <>
      {/* <UserProvider> */}
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        {/* Define routes for each page */}

        <Route
          path="/class_site/"
          element={
            <>
              <Intro/>
              <Curriculam />
              <Art_area />
              <Pricing />
              <Enroll />
              <Showcase />
              <Art_workshop />
              <Customer />
            </>
          }
        />
        <Route path="/class_site/profile" element={<Profile />} />
        <Route path="/class_site/verify-otp" element={<OTPInput />} />

        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/class_site/about" element={<About />} />
        <Route path="/class_site/classes" element={<Classes />} />
        <Route path="/class_site/contact" element={<Contact />} />
        <Route path="/class_site/login" element={<Login />} />
        <Route path="/class_site/SignUp" element={<SignUp />} />
        <Route path="/class_site/Formenroll" element={<Formenroll />} />
        <Route path="/class_site/Forget" element={<Forget />} />
        <Route path="/class_site/Reset-password" element={<Resetpassword />} />
        <Route path="/class_site/ceremic" element={<Ceremic />} />
        <Route path="/class_site/workshop" element={<Workshop />} />
        <Route path="/class_site/tutorial" element={<Tutorial />} />
        <Route path="/class_site/painting" element={<Painting />} />
        <Route path="/class_site/abstract" element={<Abstract />} />
        <Route path="/class_site/clay" element={<Clay />} />
        <Route path="/class_site/glass" element={<Glass />} />
        <Route path="/class_site/landscapes" element={<Landscapes />} />
        <Route path="/class_site/mixed_media" element={<Mixed_media />} />
        <Route path="/class_site/mosaic" element={<Mosaic />} />
        <Route path="/class_site/paper_craft" element={<Paper_craft />} />
        <Route path="/class_site/sculpture" element={<Sculpture />} />
        <Route path="/class_site/textile" element={<Textile />} />
        <Route path="/class_site/waste" element={<Waste />} />
        {/* foorer routes */}
        <Route path="/class_site/FaqPage" element={<FaqPage />} />
        <Route path="/class_site/Instructor" element={<Instructor />} />
        <Route path="/class_site/Reviews" element={<Review />} />
        <Route path="/class_site/Blog" element={<Blog/>}/>
        <Route path="/class_site/Privacy" element={<Privacy/>}/>
      </Routes>
      {/* </UserProvider> */}
    </>
  );
};

export default App;
