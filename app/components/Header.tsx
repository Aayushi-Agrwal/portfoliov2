'use client';

import { Box, Typography, Tabs, Tab, IconButton, InputBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

export default function Header() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabLabels = ["All", "Projects", "Experience", "About me"];

  return (
    <Box sx={{ bgcolor: '#1F1F1F' }}>
      <div className="flex items-center gap-8 px-10">
        <Typography variant="h5" fontWeight="bold" color="white">
            Aayooogle
        </Typography>
        <SearchBar mainPage={true}/>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ ml: '220px' }}
        >
          {tabLabels.map((label) => (
            <Tab
              key={label}
              label={label}
              sx={{
                width: 'auto',
                minWidth: 0,
                px: 0,
                mr: 3
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
