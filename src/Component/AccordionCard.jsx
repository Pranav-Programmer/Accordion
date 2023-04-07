import React from 'react';
import Accordion from './Accordion';
import {MDBRow} from 'mdb-react-ui-kit';
import { makeStyles } from '@material-ui/core/styles';

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
    const accordionData = [
        {id: 1,      
        title: 'Is this a good product?',      
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum,neque porro unde ducimus officiis animi vitae! Quidem.',
        },    
        {id: 2,
        title: 'How much does it cost?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum,neque porro unde ducimus officiis animi vitae! Quidem.',
        },    
        {id: 3,      
        title: 'When can I get it?',
        content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum,neque porro unde ducimus officiis animi vitae! Quidem.',    
        },
      ];

  return (
    <div className="App">
        <h2 className={classes.insideApp}>Project 2: FAQ/Accordion</h2>
          <MDBRow className="mb-4">
            <div
              className={`${classes.custom} shadow-1-strong`}
            >
              <h4 className={classes.FAQ_Text}>Frequently Asked Questions</h4>
            {accordionData.map((data) => (
                <Accordion key={data.id} title={data.title} content={data.content} />
            ))}
      </div>
      </MDBRow>

    </div>
  );
}

export default AccordionCard;
