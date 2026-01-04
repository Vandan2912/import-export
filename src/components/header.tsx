"use client";
import React, { useEffect } from "react";
import "@/styles/header.css";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("site-header");
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };
    handleScroll(); // Initial check

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="site-header" className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="OM EXIM Corporation" />
          {/* <div className="logo-text">
            <h1>OM EXIM Corporation</h1>
            <span>An ISO 22000:2005 Certified Company</span>
          </div> */}
        </div>

        <nav className="nav">
          <a href="#">HOME</a>
          <a href="about-us">ABOUT US</a>
          <a href="#">PRODUCTS</a>
          <a href="#">PROCESS</a>
          <a href="#">CERTIFICATES</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
