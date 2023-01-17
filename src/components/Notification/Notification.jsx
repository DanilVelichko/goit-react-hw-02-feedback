import React from "react";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';


const Notification = ({message}) => {
    return (
        <>
            <List aria-label="mailbox folders">
            <ListItem>
                <ListItemText primary={message} />
            </ListItem>
            </List>
        </>

)
}

export default Notification;