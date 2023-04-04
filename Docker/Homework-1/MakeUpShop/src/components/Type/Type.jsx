import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styles } from '../Sidebar/SidebarType/SidebarType';
import { styleBrandsTypes } from '../Brands/Brands';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText } from '@mui/material';
import { updateProducts as updateProductsAction } from '../../store/actions/products/products.actions';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../api/constants/urls';
import './Type.css';

const Type = () => { 
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [types, setTypes] = useState([]);

  const dispatch = useDispatch();
  
  const handleListItemClick = (event, index, productType, categories) => {
    setSelectedIndex(index);
    const request = fetch(`${BASE_URL}/products?product_type=${productType}&category=${categories}`, {
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
    const response = fetch(`${BASE_URL}/product_types/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then((resp) => {
      return resp.json();}
    ).then((data) => {
      setTypes(data);
    });
  };

  return (
    <ul>
      {types.map((type) => ( 
        <li key={type.id}> 
          <Accordion sx= {{...styles, width: 80}} className="accordion-categories">
            <AccordionSummary sx= {{...styles, width: 150}} expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header" className="accordion">
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </AccordionSummary>  
            <AccordionDetails  sx= {{...styles, overflowY: 'visible'}}>
              <List component="nav" aria-label="main mailbox folders" sx={{...styleBrandsTypes, width: 150}}>
                {type.categories.map((categorie, index) => (
                  <ListItemButton key={categorie.id}
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index, type.name, categorie.name)} >
                    <ListItemText primaryTypographyProps={{fontFamily: 'Playfair Display'}} textAlign='left' primary={categorie.name.charAt(0).toUpperCase() + categorie.name.slice(1)} />
                  </ListItemButton>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </li>
      ))}
    </ul>
  );
};

export default Type;
