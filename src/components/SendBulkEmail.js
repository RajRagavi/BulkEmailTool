// src/components/SendBulkEmail.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import axios from 'axios';
import Sidebar from './Sidebar';

const SendBulkEmail = () => {
  const [emailList, setEmailList] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the POST request
      await axios.post(
        'https://bulkemailserver.onrender.com/api/send-bulk-email',
        {
          emailList: emailList.split(',').map(email => email.trim()), // Split and trim emails
          subject,
          message,
        },
        {
          headers: {
            'Content-Type': 'application/json', // Ensure correct headers
          },
        }
      );

      // If successful, show success message
      setSuccessMessage('Emails sent successfully!');
      setErrorMessage(''); // Clear error message, if any
      setEmailList('');
      setSubject('');
      setMessage('');
    } catch (error) {
      // Log error and show appropriate error message
      console.error('Error response:', error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.error || 'Failed to send emails. Please try again.'
      );
      setSuccessMessage(''); // Clear success message, if any
    }
  };

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Sidebar />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}
      >
        <Typography variant="h4" gutterBottom>
          Send Bulk Email
        </Typography>

        {/* Success Alert */}
        {successMessage && (
          <Alert
            severity="success"
            onClose={() => setSuccessMessage('')}
            sx={{ marginBottom: 2 }}
          >
            {successMessage}
          </Alert>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <Alert
            severity="error"
            onClose={() => setErrorMessage('')}
            sx={{ marginBottom: 2 }}
          >
            {errorMessage}
          </Alert>
        )}

        <TextField
          label="Email List (comma-separated)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={emailList}
          onChange={(e) => setEmailList(e.target.value)}
          placeholder="example1@gmail.com, example2@gmail.com"
        />

        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Send Email
        </Button>
      </Box>
    </Box>
  );
};

export default SendBulkEmail;
