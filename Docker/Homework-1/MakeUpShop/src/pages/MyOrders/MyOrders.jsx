import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { useDispatch } from 'react-redux';
import { products as productsAction } from '../../store/actions/products/products.actions';
import { BASE_URL } from '../../api/constants/urls';
import './MyOrders.css';

const MyOrders = () => {
  const [addOrders, setAddOrders] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getOrders();
    dispatch(productsAction());
  }, []);
  const getOrders = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const resp = fetch(`${BASE_URL}/users/me/orders/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      return response.json();
    }).then((data) => {
      setAddOrders(data);
    });
  };
  return(
    <main className="main-orders">
      <h1>My orders</h1>
      <section className="section-orders">
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 0 -5}}>
          {addOrders.map((order) => (
            <Card sx={{ width: 300, backgroundColor: '#F7F4F2', marginRight: 10, boxShadow: 5, borderRadius: 3, marginBottom: 5}} key={order.id}>
              <CardContent>
                <div>Your order id: {order.id}</div>
                <div>Number of products: {order.products.length}</div>
                <div>Address: {order.address}</div>
                <div>Price: ${order.products.reduce((prev, cur) => prev + Number(cur.price), 0).toFixed(1)}</div>
              </CardContent>
            </Card>
          ))}
        </Box>
      </section>
    </main>
  );
};

export default MyOrders;
