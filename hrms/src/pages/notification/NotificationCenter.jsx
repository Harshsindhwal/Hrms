import React, { useState } from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NotificationCenter() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'Your leave request has been approved',
      date: '2023-07-01',
    },
    {
      id: 2,
      message: 'New performance review is due by end of the week',
      date: '2023-07-02',
    },
    {
      id: 3,
      message: 'Payroll for June has been processed',
      date: '2023-07-03',
    },
  ]);

  const handleDeleteNotification = (id) => {
    // Filter out the notification to be deleted
    const deletedNotification = notifications.find((notif) => notif.id === id);
    setNotifications((prevNotifications) => 
      prevNotifications.filter((notification) => notification.id !== id)
    );
    setSnackbarMessage(`${deletedNotification.message} removed`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Notification Center
      </Typography>
      <List>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <ListItem
              key={notification.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteNotification(notification.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText
                primary={notification.message}
                secondary={notification.date}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">No notifications available</Typography>
        )}
      </List>
      {/* Snackbar for showing deletion message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Position at the top right
      >
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default NotificationCenter;
