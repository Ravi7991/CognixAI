import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const TermsConditions = () => {
  return (
    <Box sx={{ backgroundColor: '#030303', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 4 }}>
          Terms & Conditions
        </Typography>
        <Typography variant="body1" sx={{ color: '#cbd5e1', lineHeight: 1.8 }}>
          By using our services, you agree to these terms and conditions.
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsConditions;
