import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import Question from '../Question/Question';
import Footer from '../Footer/Footer';



const Home = () => {
  return (
    <div>
          <Navbar/>
          <Hero/>
          <Service/>
          <Question/>
          <Footer/>
    </div>
  )
}

export default Home
