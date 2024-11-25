import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Dashboard as DashboardIcon, Email as EmailIcon, ExitToApp as LogoutIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      width="250px"
      color="white"
      display="flex"
      flexDirection="column"
      height="100vh"
      p={2}
      sx={{
        background: 'linear-gradient(135deg, #333, #111)', // Use the sx prop for complex background styling
        boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Logo/Header */}
      <Typography variant="h5" align="center" gutterBottom>
        Your Logo
      </Typography>

      {/* Navigation List */}
      <List>
        <ListItem button onClick={() => navigate('/dashboard')}>
          <ListItemIcon><DashboardIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => navigate('/send-bulk-email')}>
          <ListItemIcon><EmailIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Send Bulk Email" />
        </ListItem>

        <ListItem button onClick={() => navigate('/')}>
          <ListItemIcon><LogoutIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
