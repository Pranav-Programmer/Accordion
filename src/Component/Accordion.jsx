import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  insideApp:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '.3rem 1rem',
    backgroundColor:'#fff',
    margin:'10px'
  },
  h5:{
    flex: '100', textAlign: 'left', cursor:'default'
  },
  button:{
    flex: '1', 
    color: 'blue', 
    background:'#d3d8fd', 
    borderBlockColor:'blue', 
    cursor:'pointer'
  },
  container:{
    backgroundColor:'#fff', 
    width:'98.4%', 
    marginLeft:'.85%'
  },
  insideContainer:{
    padding: '.1rem', 
    marginTop:'-10px', 
    marginLeft:'2rem', 
    marginRight:'2rem'
  }
}));

function Accordion(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        // Reset expanded state when unmounting
        return () => {
          setExpanded(null);
        };
      }, []);
    
      const handleAccordionChange = (id) => {
        if (expanded === id) {
          setExpanded(null);
        } else {
          setExpanded(id);
        }
      };

    return (
        <div className={classes.App}>
                  
                    <div className={classes.insideApp}>
                      <h5 className={classes.h5}>{props.title}</h5>
                      <button className={classes.button} onClick={() => handleAccordionChange(props.id)}>{expanded === props.id ? '-' : '+'}</button>
                    </div>
    
                    <div className={classes.container} style={{}}>
                    {expanded === props.id && (
                      <div className={classes.insideContainer}>
                        <p>{props.content}</p>
                      </div>
                    )}
                    </div>
                  </div>
      );
}

export default Accordion
