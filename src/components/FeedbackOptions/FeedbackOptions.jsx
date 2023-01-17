import React from 'react';
import css from './FeedbackOptions.module.css'
import Button from '@mui/material/Button';


const FeedbackOptions = ({handleGood, handleNeutral, handleBad}) => {
  
       return (
            <>
           <div className={css.counter}>
        
               <Button onClick={handleGood}>Good</Button>
                <Button onClick={handleNeutral}>Neutral</Button>
                <Button onClick={handleBad}>Bad</Button>
                
                   
           </div>
             </>
        )

    
}


export default FeedbackOptions;