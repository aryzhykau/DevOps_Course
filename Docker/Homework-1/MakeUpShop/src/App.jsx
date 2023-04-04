import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';
import Catalogue from './pages/Catalogue/Catalogue';
import Layout from './components/Layout/Layout';
import MyOrders from './pages/MyOrders/MyOrders';
function App() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/catalogue'element={<Catalogue />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/myOrders' element={<MyOrders/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
