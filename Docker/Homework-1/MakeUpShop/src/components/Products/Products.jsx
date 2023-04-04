import React from 'react';
import {  useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid} from '@mui/material';
import { addToCart as addToCartAction } from '../../store/actions/cart/cart.actions';
import { useDispatch } from 'react-redux';
import './Products.css';

export const productStyle = {
  backgroundColor: '#F7F4F2',
  border: 0,
  boxShadow: 0,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FormRow = () => {
  const productsShow = useSelector(state => state.products);
  const dispatch = useDispatch();
 
  const addProductToCard = (product) => {
    dispatch(addToCartAction(product));
  };

  return ( 
    <React.Fragment>
      { productsShow.length !== 0 ? productsShow.map((product) => (
        <div key={product.id} className="grid">
          <Grid container justifyContent='flex-start' item xs={4} >
            <Item  sx={productStyle}>
              <div className="productPicture">
                <img  src={product.image_link } alt="Photo" />
              </div>
              <div className="gridInf" key={product.id}>
                <p className="gridName">{product.name.toUpperCase()}</p>
                <p className="gridPrice">${product.price}</p>
              </div>
              <div>
                <button className="addToCart" onClick={() => addProductToCard(product)}>
                  <span>Buy</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5H23V21.2295C23 22.2073 22.2224 23 21.2632 23H2.73684C1.77761 23 1 22.2073 1 21.2295V5.5Z" stroke="#F7F4F2"/>
                    <path d="M6 10V7.54545C6 3.9305 8.6863 1 12 1C15.3137 1 18 3.9305 18 7.54545V10" stroke="#F7F4F2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </Item>
          </Grid>
        </div>
      )) : (<></>)
      }
    </React.Fragment>
  );
};

const Products = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
  
};

export default Products;
