import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Products from '../../components/Products/Products';
import './Catalogue.css';

const Catalogue = () => {
  
  return (
    <main className="main-catalogue">
      <h1 className="header-sidebar">Catalogue</h1>
      <section className="section-sidebar">
        <div>
          <Sidebar />
        </div>
        <div>
          <Products />
        </div>
      </section>
    </main>
  );
};

export default Catalogue;
