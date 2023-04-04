import React, {useState, useEffect} from 'react'; 
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText } from '@mui/material';
import { updateProducts as updateProductsAction } from '../../store/actions/products/products.actions';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../api/constants/urls';

export const styleBrandsTypes = {
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'flex-start' 
};
const Brands = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  const handleListItemClick = (event, index, reqParam) => {
    setSelectedIndex(index);
    const request = fetch(`${BASE_URL}/products?brand_name=${reqParam}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      dispatch(updateProductsAction(data));
    });
  }; 
  
  useEffect(() => {
    request();
  }, []);
  const request = () => {
    const response =  fetch('http://localhost:8000/brands/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then((resp) => {
      return resp.json();  
    }).then((data) => {
      setBrands(data);
    });
  };

  return (
    <>
      <List component="nav" aria-label="main mailbox folders" sx={styleBrandsTypes}>
        {brands.map((brand, index) => (
          <ListItemButton key={brand.id}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index, brand.name)}>
            <ListItemText primaryTypographyProps={{fontFamily: 'Playfair Display'}} primary={brand.name.charAt(0).toUpperCase() + brand.name.slice(1)} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default Brands;
