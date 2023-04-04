import React, { useState } from 'react';
import { Drawer, Box, Button, List, ListItem, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { removeFromCart as removeFromCartAction} from '../../store/actions/cart/cart.actions';
import { showOrderForm as showOrderFormAction } from '../../store/actions/orderForm/orderForm.actions';
import OrderForm from '../OrderForm/OrderForm';
import './Cart.css';


const Сart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const addProducts = useSelector(state => state.cart);
  
  const dispatch = useDispatch();

  return (
    <>
      <Button sx={{minWidth: 0, padding: 0}} onClick={() => setIsDrawerOpen(true)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5.5H23V21.2295C23 22.2073 22.2224 23 21.2632 23H2.73684C1.77761 23 1 22.2073 1 21.2295V5.5Z" stroke="#1E1E1E"/>
          <path d="M6 10V7.54545C6 3.9305 8.6863 1 12 1C15.3137 1 18 3.9305 18 7.54545V10" stroke="#1E1E1E" strokeLinecap="round"/>
        </svg>
      </Button>
     
      <Drawer anchor="right" open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)} >
        <div className="cart-wrapper">
          <div className="cart">
            <div className="cart-inf">
              <h1>Your cart({addProducts.length})</h1>
              <button className="closeCart-btn" onClick={() => setIsDrawerOpen(false)}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 1L1 19" stroke="#1E1E1E" strokeLinecap="round"/>
                <path d="M0.999999 1L19 19" stroke="#1E1E1E" strokeLinecap="round"/>
              </svg></button>
            </div>
            <hr />
            
            <Box width='350px' role='presentation'>
              <List>
                {addProducts.length !== 0 ? addProducts.map((product, index) => (
                  <>
                    <ListItem key={index}>
                      <div className='product-img'>
                        <img src={product.image_link} alt="" />
                      </div>
                      <div className='product-inf'>
                        <div className="delete-product">
                          <div>{product.name}</div>
                          <div>
                            <button onClick={() => dispatch(removeFromCartAction(index))}>
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 1L1 13" stroke="#1E1E1E" strokeLinecap="round"/>
                                <path d="M1 1L13 13" stroke="#1E1E1E" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div>${product.price}</div>
                      </div>
                    </ListItem>
                    <Divider />
                  </>
                )) : (<p className="emptyCart">Your cart is empty</p>)
                }
              </List> 
              {addProducts.length !== 0 ? <div className="totalAmount">
                <p>Total amount: ${addProducts.reduce((prev, cur) => prev + Number(cur.price), 0).toFixed(1)}</p>
              </div> : <></> }
              <div className="makeOrder-wrapper">
                <button className="makeOrder" onClick={() => dispatch(showOrderFormAction())} disabled={addProducts.length !== 0 ? false : true}> <span>Checkout</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5H23V21.2295C23 22.2073 22.2224 23 21.2632 23H2.73684C1.77761 23 1 22.2073 1 21.2295V5.5Z" stroke="#F7F4F2"/>
                    <path d="M6 10V7.54545C6 3.9305 8.6863 1 12 1C15.3137 1 18 3.9305 18 7.54545V10" stroke="#F7F4F2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </Box>
          </div>
        </div>
        <OrderForm/>
      </Drawer>
      
    </>
  );
};  

export default Сart; 
