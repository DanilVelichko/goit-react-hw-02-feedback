import React from "react";
import PropTypes from 'prop-types'
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
Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;