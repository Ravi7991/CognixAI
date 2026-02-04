import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box sx={{ backgroundColor: '#030303', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 4 }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ color: '#cbd5e1', lineHeight: 1.8 }}>
          Your privacy is important to us. This privacy policy outlines how we collect, use, and protect your information.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
