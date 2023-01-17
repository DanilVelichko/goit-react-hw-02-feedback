import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

const Statistics = ({state, countTotalFeedback, countPositiveFeedbackPercentage}) => {
  
       return (
            <>
            <List   aria-label="mailbox folders">
             <ListItem>
                <ListItemText primary={`Good: ${state.good}`} />
                   </ListItem>
              
             <ListItem>
                <ListItemText primary={`Neutral: ${state.neutral}`} />
                   </ListItem>
                   
             <ListItem divider>
                <ListItemText primary={`Bad: ${state.bad}`} />
                   </ListItem>

             <ListItem>
                <ListItemText primary={'Total: ' + countTotalFeedback()} />
                   </ListItem>

             <ListItem >
                <ListItemText primary={'Positive feedback: ' + countPositiveFeedbackPercentage() + '%'} />
                   </ListItem>
               </List>
             </>
        )
}


export default Statistics;