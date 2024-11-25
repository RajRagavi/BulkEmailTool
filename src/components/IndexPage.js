import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import LoginForm from './LoginForm'; // Assuming you have a separate LoginForm component
import RegisterForm from './RegisterForm'; // Assuming you have a separate RegisterForm component
import bannerImage from '../assest/img/Banner.jpg'; // Update the path if necessary

const IndexPage = () => {
  const [formType, setFormType] = useState(null); // state to toggle between login and register forms

  const handleButtonClick = (type) => {
    setFormType(type);
  };

  return (
    <Box display="flex" height="100vh">
      {/* Banner Image */}
      <Box flex={1} style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover' }} />

      {/* Form Column */}
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        {!formType ? (
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>Welcome to Bulk Email Tool</Typography>
            <Button variant="contained" color="primary" onClick={() => handleButtonClick('login')}>Login</Button>
            <Button variant="outlined" color="primary" onClick={() => handleButtonClick('register')} style={{ marginLeft: 10 }}>Sign Up</Button>
          </Box>
        ) : formType === 'login' ? (
          <LoginForm />
        ) : formType === 'register' ? (
          <RegisterForm />
        ) : null}
      </Box>
    </Box>
  );
};

export default IndexPage;
