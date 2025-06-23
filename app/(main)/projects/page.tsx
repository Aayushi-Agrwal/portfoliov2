'use client'

import { projectData } from '@/app/components/constant';
import { truncateText } from '@/app/components/helper';
import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + projectData.length) % projectData.length : null));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % projectData.length : null));

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'},
        gap: 2,
        p: '40px',
        mb: 4,
        position: 'relative',
        minHeight: '800px', 
      }}
    >
      {/* Normal cards */}
      {projectData.map((project, index) => (
        <Box
          key={index}
          component="div"
          onClick={() => setSelectedIndex(index)}
          sx={{
            breakInside: 'avoid',
            mb: 2,
            cursor: 'pointer',
          }}
        >
          <Card
            sx={{
              bgcolor: '#222',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={project.picture}
              alt={`project-${index}`}
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                display: 'block',
                borderRadius: '16px',
              }}
            />
          </Card>
          <div className="mt-2">
            <Typography variant="body2" color="#838383">
              {project.title}
            </Typography>
            <Typography variant="body2">{truncateText(project.description, 50)}</Typography>
          </div>
        </Box>
      ))}

      {/* Large selected card, absolutely positioned */}
      {selectedIndex !== null && (
        <Box
          sx={{
            position: 'fixed',
            top: 200,
            left: '50%', // for example, position at mid-grid horizontally
            transform: 'translateX(-50%)',
            minWidth: '300px',
            width: '45%', // roughly half or adjust as needed
            height: 500,
            bgcolor: '#202124',
            borderRadius: '16px',
            overflow: 'hidden',
            p: 2,
            zIndex: 20,
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Top-Right Icons */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: 'flex',
              gap: 1,
              zIndex: 30,
            }}
          >
            <ChevronLeftIcon sx={{ color: 'white', cursor: 'pointer' }} onClick={handlePrev} />
            <ChevronRightIcon sx={{ color: 'white', cursor: 'pointer' }} onClick={handleNext} />
            <CloseIcon sx={{ color: 'white', cursor: 'pointer' }} onClick={handleClose} />
          </Box>

          <Typography variant="body1" fontWeight="bold" color="white" mb={1}>
            {projectData[selectedIndex].title}
          </Typography>

          <Box
            component="img"
            src={projectData[selectedIndex].picture}
            alt={`project-${selectedIndex}`}
            sx={{
              width: '100%',
              height: 300,
              objectFit: 'cover',
              borderRadius: '12px',
              mb: 2,
            }}
          />

          <Typography variant="body2" color="white" mb={2} sx={{ flexGrow: 1 }}>
            {projectData[selectedIndex].description}
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={1}>
            {projectData[selectedIndex].technologies.map((tech, i) => (
              <Box
                key={i}
                px={2}
                py={1}
                sx={{
                  border: '1px solid #555',
                  borderRadius: '20px',
                  color: '#ddd',
                  fontSize: '14px',
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Projects;
