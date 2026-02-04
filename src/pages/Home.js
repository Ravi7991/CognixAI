import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#030303', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 4 }}>
          Welcome to Cognix AI
        </Typography>
        <Typography variant="body1" sx={{ color: '#cbd5e1' }}>
          Intelligent SEO, Development & AI Solutions
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
