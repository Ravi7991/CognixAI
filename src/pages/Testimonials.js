import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: '#030303', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 4 }}>
          Client Testimonials
        </Typography>
      </Container>
    </Box>
  );
};

export default Testimonials;
