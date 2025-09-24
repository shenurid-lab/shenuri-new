// src/App.jsx
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import AllFeatures from "./sections/AllFeatures";
import TwoCards from "./sections/TwoCards";
import Companies from "./sections/Companies";
import Subscribe from "./sections/Subscribe";
import Footer from "./components/Footer";


export default function App() {
  return (
    
    <>
      <Header />
       
      <Hero /> 
      <Services /> 
      <AllFeatures />
      <TwoCards />
      <Companies />
      <Subscribe />
      <Footer />       

    </>
  );

  
}
