import { HashRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "../pages/Home";
import Convert from "../pages/Convert";
import AppList from "../pages/AppList";
import Error404 from "../pages/Error404";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div className="nav">
        <h2 data-aos="fade-right" data-aos-duration="3000">
          One Conversion to rule the world
        </h2>
        <h3>Special use of HashRouter</h3>
        <HashRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/convert">Money Converter</Link>
            <Link to="/list">Live Exchange Rates</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/convert" element={<Convert />} />
            <Route path="/list" element={<AppList />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </HashRouter>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
