import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import Header from '../Templete/Header';

import Footer from '../Templete/Footer';
import Home from '../paginas/Home';

import Routes from './Routes';



export default props => (
      <>
        
      
         <Header/>

         <Routes/> 
         
         <Footer />
        
    </>
    
)