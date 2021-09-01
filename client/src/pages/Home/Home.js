import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Events from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
