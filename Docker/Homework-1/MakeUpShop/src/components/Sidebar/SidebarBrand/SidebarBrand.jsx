import React from 'react';
import Brands from '../../Brands/Brands';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styles} from '../SidebarType/SidebarType';

const SidebarBrand = () => {

  return(
    <>
      <Accordion sx= {styles}>
        <AccordionSummary sx= {styles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
        Brand
        </AccordionSummary>  
        <AccordionDetails sx={{overflowY: 'scroll', height: 300}}>
          <Brands />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SidebarBrand;
