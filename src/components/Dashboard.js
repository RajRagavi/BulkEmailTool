// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [sentEmails, setSentEmails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the sent emails from backend
    const fetchSentEmails = async () => {
      try {
        const response = await axios.get('/api/sent-emails');
        setSentEmails(response.data);
      } catch (error) {
        console.error('Failed to fetch sent emails:', error);
      }
    };
    fetchSentEmails();
  }, []);

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <Box flex={1} p={3}>
      

        {/* Sent Emails Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email Address</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Date Sent</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sentEmails.map((email, index) => (
                <TableRow key={index}>
                  <TableCell>{email.email}</TableCell>
                  <TableCell>{email.subject}</TableCell>
                  <TableCell>{email.message}</TableCell>
                  <TableCell>{new Date(email.dateSent).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
