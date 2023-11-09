import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from "../pages/Home";

export default function Main({ children }) {
  return (
    <div>
        <NavBar />
        <Home />
        { children }
        <Footer />
    </div>
  )
}
