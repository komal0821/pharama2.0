import React from 'react';
import './App.css';
import HomePage from './Component/HomePage'
import Header from './Component/Header';
import Product from './Component/Product'
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import ProductListing from './Component/ProductListing';
import Presciption from './Component/Presciption';
// import ProductListing from './Component/Product';

function App() {
  return (
    <div className="App">
      <main>
        {<Header/>}
        {<HomePage/>}
        {<Product/>}
        {<ProductListing/>}
        {<Presciption/>}
        <br/>
        <br/>
        {<Contact/>}
        <br/>
       
      </main>
      <footer>
        {<Footer/>}
      </footer>
    </div>
  );
}

export default App;
