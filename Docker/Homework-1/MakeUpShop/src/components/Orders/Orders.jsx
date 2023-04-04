import React from 'react';
import './Orders.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Orders = () => {
  const user = useSelector(state => state.user);
  return (
    <>
      {user === true ? <Link to='/myOrders'><button type="button" className="orders">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.5" y="2.5" width="13" height="19" rx="1.5" stroke="#1E1E1E"/>
          <path d="M7 5H17" stroke="#1E1E1E" strokeLinecap="round"/>
          <path d="M7 9H13" stroke="#1E1E1E" strokeLinecap="round"/>
          <path d="M7 13H15" stroke="#1E1E1E" strokeLinecap="round"/>
          <path d="M7 17H15" stroke="#1E1E1E" strokeLinecap="round"/>
        </svg>
      </button></Link>
        : <></>}
    </>
  );
};

export default Orders;
