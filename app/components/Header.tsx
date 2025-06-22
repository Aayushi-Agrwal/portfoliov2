'use client';

import { Box, Typography, Tabs, Tab, IconButton, InputBase } from '@mui/material';
import { SearchBar } from './SearchBar';
import { useState } from 'react';
import { useRouter } from "next/navigation";

const tabLabels = ["All", "Projects", "Experience", "About me"];
const tabRoutes = ["/all", "/projects", "/experience", "/aboutMe"];

export default function Header() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(tabRoutes[newValue]);
  };

  return (
    <Box sx={{ bgcolor: '#1F1F1F' }}>
      {/* Mobile Layout */}
      <Box sx={{ 
        display: { xs: 'flex', md: 'none' }, 
        flexDirection: 'column', 
        alignItems: 'center',
        py: 2
      }}>
        <Typography variant="h5" fontWeight="bold" color="white">
          Aayooogle
        </Typography>
        <Box sx={{ width: '100%', px: 2 }}>
          <SearchBar mainPage={true}/>
        </Box>
      </Box>

      {/* Desktop Layout */}
      <Box sx={{ 
        display: { xs: 'none', md: 'flex' }, 
        alignItems: 'center', 
        gap: '42px', 
        px: { xs: 5, lg: '40px' }
      }}>
        <Typography variant="h5" fontWeight="bold" color="white">
          Aayooogle
        </Typography>
        <SearchBar mainPage={true}/>
      </Box>

      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        px: { xs: 2, md: 0 }
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ 
            ml: { xs: 0, md: '40px', xl: '220px' },
            width: { xs: '100%', md: 'auto' },
            '& .MuiTabs-flexContainer': {
              justifyContent: { xs: 'space-around', md: 'flex-start' },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            }
          }}
        >
          {tabLabels.map((label) => (
            <Tab
              key={label}
              label={label}
              color='gray'
              
              sx={{
                width: 'auto',
                minWidth: 0,
                px: 0,
                mr: { xs: 0, md: 3 },
               '&:hover': {
                  color: 'white',
                  fontWeight: '900'
                },
                '&.Mui-selected': {
                  color: 'white',
                  fontWeight: '900'
                }
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
