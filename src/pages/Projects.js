import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Projects = () => {
  return (
    <Box sx={{ backgroundColor: '#030303', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 4 }}>
          Our Projects
        </Typography>
      </Container>
    </Box>
  );
};

export default Projects;
