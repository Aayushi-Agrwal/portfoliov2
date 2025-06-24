'use client'

import { projectData } from '@/app/components/constant';
import { truncateText } from '@/app/components/helper';
import { Box, Card, Typography, Slide, Dialog, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useThemeMode } from '@/app/components/ThemeContext';
import { useTheme } from '@mui/material/styles';

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + projectData.length) % projectData.length : null));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % projectData.length : null));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        p: '40px',
        gap: 4,
        bgcolor: mode === 'light' ? '#fff' : theme.palette.background.default,
      }}
    >
      {/* Left: Project Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: selectedIndex === null
          ? {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }
          : {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
          gap: 2,
          flex: 1,
          mb: 4,
        }}
      >
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
                border: index === selectedIndex ? '2px solid #A8C7FA' : 'none',
                transition: 'border 0.3s',
              }}
            >
              {/* Image wrapper for overlay */}
              <Box sx={{ position: 'relative' }}>
                {/* Image */}
                <Box
                  component="img"
                  src={project.picture}
                  alt={`project-${index}`}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '16px 16px 0 0',
                  }}
                />

                {/* Overlay (visible only when selected) */}
                {index === selectedIndex && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(89, 107, 137, 0.35)', // bluish-gray tint
                      borderRadius: '16px 16px 0 0',
                    }}
                  />
                )}
              </Box>
            </Card>

            <div className="mt-2">
              <Typography variant="body2" color="#838383">
                {project.title}
              </Typography>
              <Typography variant="body2" color={mode === 'light' ? 'black' : "#838383"}>
                {truncateText(project.description, 50)}
              </Typography>
            </div>
          </Box>
        ))}
      </Box>

      {/* Right: Sticky Drawer or Popup */}
      {isMobile ? (
        <Dialog open={selectedIndex !== null} onClose={() => setSelectedIndex(null)} fullWidth maxWidth="sm" PaperProps={{
          sx: {
            position: 'fixed',
            top: '30%',
            left: 'auto',
            right: 'auto',
            m: 0,
            borderRadius: '16px',
            bgcolor: mode === 'light' ? 'white' : '#202124',
            p: 2,
          }
        }}>
          {selectedIndex !== null && (
            <Box>
              {/* Top-Right Icons */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" fontWeight="bold" mb={1}
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'text-decoration 0.2s',
                    color: mode === 'light' ? 'black' : 'white',
                    '&:hover': { textDecoration: 'underline' },
                  }}>
                  {projectData[selectedIndex].title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 1 }}>
                  <ChevronLeftIcon sx={{ color: mode === 'light' ? 'black' : 'white', cursor: 'pointer' }} onClick={handlePrev} />
                  <ChevronRightIcon sx={{ color: mode === 'light' ? 'black' : 'white', cursor: 'pointer' }} onClick={handleNext} />
                  <CloseIcon sx={{ color: mode === 'light' ? 'black' : 'white', cursor: 'pointer' }} onClick={() => setSelectedIndex(null)} />
                </Box>
              </Box>
              <Box component="img" src={projectData[selectedIndex].picture} alt={`project-${selectedIndex}`} sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: '12px', mb: 2 }} />
              <Typography variant="body2" color={mode === 'light' ? 'black' : 'white'} mb={2} sx={{ flexGrow: 1, cursor: 'pointer', textDecoration: 'none', transition: 'text-decoration 0.2s', '&:hover': { textDecoration: 'underline' } }}>
                {projectData[selectedIndex].description}
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {projectData[selectedIndex].technologies.map((tech, i) => (
                  <Box key={i} px={2} py={1} sx={{ border: '1px solid #555', borderRadius: '20px', color: mode === 'light' ? '#555' : '#ddd', fontSize: '14px' }}>
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Dialog>
      ) : (
        <Slide direction="left" in={selectedIndex !== null} mountOnEnter unmountOnExit>
          <Box
            sx={{
              width: '35%',
              minWidth: '300px',
              maxWidth: '500px',
              position: 'sticky',
              top: {sm: '240px', md: '180px'},
              alignSelf: 'flex-start',
              bgcolor: mode === 'light' ? 'white' : '#202124',
              borderRadius: '16px',
              overflow: 'hidden',
              py: 2,
              px: 2,
              height: 'auto',
              maxHeight: '80vh',
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 10,
            }}>
            {selectedIndex !== null && (
              <Box>
                {/* Top-Right Icons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1" fontWeight="bold" mb={1}
                    sx={{
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'text-decoration 0.2s',
                      color: mode === 'light' ? 'black' : 'white',
                      '&:hover': { textDecoration: 'underline' },
                    }}>
                    {projectData[selectedIndex].title}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 1 }}>
                    <ChevronLeftIcon sx={{ color: mode === 'light' ? 'black' : 'white', cursor: 'pointer' }} onClick={handlePrev} />
                    <ChevronRightIcon sx={{ color: mode === 'light' ? 'black' : 'white', cursor: 'pointer' }} onClick={handleNext} />
                    <CloseIcon sx={{ color: mode === 'light' ? 'black' : 'white', cursor: 'pointer' }} onClick={handleClose} />
                  </Box>
                </Box>
                <Box component="img" src={projectData[selectedIndex].picture} alt={`project-${selectedIndex}`} sx={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: '12px', mb: 2 }} />
                <Typography variant="body2" color={mode === 'light' ? 'black' : 'white'} mb={2} sx={{ flexGrow: 1, cursor: 'pointer', textDecoration: 'none', transition: 'text-decoration 0.2s', '&:hover': { textDecoration: 'underline' } }}>
                  {projectData[selectedIndex].description}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {projectData[selectedIndex].technologies.map((tech, i) => (
                    <Box key={i} px={2} py={1} sx={{ border: '1px solid #555', borderRadius: '20px', color: mode === 'light' ? '#555' : '#ddd', fontSize: '14px' }}>
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Slide>
      )}
    </Box>
  );
};

export default Projects;
