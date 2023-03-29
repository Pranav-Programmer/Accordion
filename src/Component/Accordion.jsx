import React from 'react';
import {useState, useEffect} from 'react';

function Accordion(props) {

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
        <div className="App">
 
                  
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        padding: '.3rem 1rem',
                        backgroundColor:'#fff',
                        margin:'10px',
                      }}
                    >
                      <h5 style={{ flex: '100', textAlign: 'left', cursor:'default'}}>{props.title}</h5>
                      <button onClick={() => handleAccordionChange(props.id)} style={{ flex: '1', color: 'blue', background:'#d3d8fd', borderBlockColor:'blue', cursor:'pointer'}}>{expanded === props.id ? '-' : '+'}</button>
                    </div>
    
                    <div style={{backgroundColor:'#fff', width:'98.4%', marginLeft:'.85%'}}>
                    {expanded === props.id && (
                      <div style={{ padding: '.1rem', marginTop:'-10px', marginLeft:'2rem', marginRight:'2rem'}}>
                        <p>{props.content}</p>
                      </div>
                    )}
                    </div>
                  </div>
           
    
      );
}

export default Accordion
