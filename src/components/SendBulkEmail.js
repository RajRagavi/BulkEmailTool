// src/components/SendBulkEmail.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography ,Alert } from '@mui/material';

import axios from 'axios';
import Sidebar from './Sidebar';

const SendBulkEmail = () => {
  const [emailList, setEmailList] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Sending email to:', '/send-bulk-email');
      // Replace with your backend endpoint for sending emails
      await axios.post('https://bulk-email-toolserver-ekd60qags-ragavi-rs-projects.vercel.app/api/send-bulk-email', {
        emailList: emailList.split(','),  // Split emails by comma for multiple addresses
        subject,
        message,
      });
      setSuccessMessage('Emails sent successfully!');
      // Redirect to Dashboard page upon successful submission
      setEmailList('');
      setSubject('');
      setMessage('');

    } catch (error) {
      console.error('Failed to send emails:', error);
      alert('Failed to send emails. Please try again.');
    }
  };

  return (
    <Box display="flex">
    {/* Sidebar */}
    <Sidebar />
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
    <Typography variant="h4" gutterBottom>Send Bulk Email</Typography>
    {successMessage && (
  <Alert severity="success" onClose={() => setSuccessMessage('')} sx={{ marginBottom: 2 }}>
    {successMessage}
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

      <Button variant="contained" color="primary" type="submit" fullWidth sx={{ marginTop: 2 }}>
        Send Email
      </Button>
      
    </Box></Box>
  );
};

export default SendBulkEmail;
