import React from 'react';
import Accordion from './Accordion';
import {MDBRow} from 'mdb-react-ui-kit';
import { makeStyles } from '@material-ui/core/styles';
import accordionData from './accordionData'

const useStyles = makeStyles((theme) => ({
  insideApp:{
    color: '#000', 
    marginTop: '1rem', 
    textAlign:'center'
  },
  custom:{
    backgroundColor: '#0000ff', 
    margin: '3% 7%', 
    padding:'40px', 
    borderRadius: '10px', 
    width: '80%'
  },
  FAQ_Text:{
    color: 'white',
    marginTop: '-1rem'
  }
}));

function AccordionCard() {
  const classes = useStyles();

  return (
    <div className="App">
        <h2 className={classes.insideApp}>Project 2: FAQ/Accordion</h2>
          <MDBRow className="mb-4">
            <div
              className={`${classes.custom} shadow-1-strong`}
            >
              <h4 className={classes.FAQ_Text}>Frequently Asked Questions</h4>
              {
              accordionData.map(({id,title,content}) => (
                <Accordion key={id} title={title} content={content} />
            ))}
      </div>
      </MDBRow>
    </div>
  );
}

export default AccordionCard;
