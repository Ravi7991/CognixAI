import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#030303', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 4 }}>
          About Cognix AI
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
