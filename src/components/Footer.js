import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#050505', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <Typography variant="body2" sx={{ color: '#9ca3af' }}>
        © 2024 Cognix AI. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
