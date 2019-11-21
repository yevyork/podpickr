import React from 'react';
import { Routes } from './routes'
import Nav from './components/Nav'
import Footer from './components/shared/Footer'
import './App.css';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
      
        <Routes />
        
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
