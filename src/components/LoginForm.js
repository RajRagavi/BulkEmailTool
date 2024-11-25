import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log('Login successful:', response.data);
      navigate('/send-bulk-email');
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Server error';
      console.error('Login Error:', errorMsg);
      setApiError(errorMsg);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f4f6f8">
      <Box sx={{ width: 400, padding: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          {apiError && (
            <Typography color="error" variant="body2" align="center" sx={{ marginTop: 1 }}>
              {apiError}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: '10px', marginTop: '10px' }}>
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
