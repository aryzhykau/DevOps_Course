import React from 'react';
import Type from '../../Type/Type';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const styles = {
  border: 0,
  boxShadow: 0,
  width: 250,
  bgcolor: '#F7F4F2',
};
const SidebarType = () => {
  
  return (
    <>
      <Accordion sx= {styles}>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" sx={styles}  >
          Type
        </AccordionSummary>  
        <AccordionDetails sx={styles} >
          <Type />
        </AccordionDetails>
      </Accordion>
    </>
   
  );
};

export default SidebarType;
