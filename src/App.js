import React from "react";
import './App.css';
import Copyright from './components/copyright';
import Footer from './components/footer';
import Header from './components/header';
import Whatsapp from './components/whatsapp';
import Routways from "./components/routways";
function App() {
  return (
    <div>
      <Header/>
      <Routways />
      <Whatsapp/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
