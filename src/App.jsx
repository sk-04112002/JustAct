import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import JANavbar from './Components/JANavbar/JANavbar';
import JAHeader from './Components/JAHeader/JAHeader';
import JASection_1 from './Components/JASection_1/JASection_1';
import JASection_2 from './Components/JASection_2/JASection_2';
import JAAbout from './Components/JAAbout/JAAbout';
import JABlogs from './Components/JABlogs/JABlogs';
import JAFooter from './Components/JAFooter/JAFooter';

function App() {
  return (
    <>
      <JANavbar/>
      <JAHeader/>
      <JASection_1/>
      <JASection_2/>
      <JAAbout/>
      <JABlogs/>
      <JAFooter/>
    </>
  )
}

export default App
