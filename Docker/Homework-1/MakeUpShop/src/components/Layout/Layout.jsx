import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Orders from '../Orders/Orders';
import Cart from '../Cart/Cart';
import Account from '../Account/Account';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {

  return (
    <div className='wrapper'>
      <header>
        <div className="wrapper-header">
          <div className="logo">
            <Link to="/"><p>makeup shop.</p></Link>
          </div>
          <Nav/>
          <div className="btns">
            <Orders/>
            <Account/>
            <Cart/>
          </div>
        </div>
      </header>
      <Outlet/>
      <Footer/>
    </div>
  );
};
export default Layout;
