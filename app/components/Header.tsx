'use client';

import { Box, Typography, Tabs, Tab } from '@mui/material';
import { SearchBar } from './SearchBar';
import { useRouter, usePathname } from "next/navigation";
import { useThemeMode } from './ThemeContext';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';

const tabLabels = ["All", "Projects", "Experience", "About me"];
const tabRoutes = ["/all", "/projects", "/experience", "/aboutMe"];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { mode, toggleTheme } = useThemeMode();

  // Find the index of the current route
  const currentTab = tabRoutes.findIndex(route => pathname.startsWith(route));
  const value = currentTab === -1 ? 0 : currentTab;
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    router.push(tabRoutes[newValue]);
  };

  return (
    <Box sx={{ 
      bgcolor: theme.palette.background.paper,
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Mobile Layout */}
      <Box sx={{ 
        display: { xs: 'flex', md: 'none' }, 
        flexDirection: 'column', 
        alignItems: 'center',
        py: 2,
      }}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
          {isLight ? (
            <>
              <span style={{ color: '#4285F4' }}>A</span>
              <span style={{ color: '#EA4335' }}>a</span>
              <span style={{ color: '#FBBC05' }}>y</span>
              <span style={{ color: '#4285F4' }}>o</span>
              <span style={{ color: '#34A853' }}>o</span>
              <span style={{ color: '#FBBC05' }}>g</span>
              <span style={{ color: '#EA4335' }}>l</span>
              <span style={{ color: '#4285F4' }}>e</span>
            </>
          ) : 'Aayoogle'}
        </Typography>
        <Box sx={{ width: '100%', px: 2 }}>
          <SearchBar mainPage={true}/>
        </Box>
        <IconButton onClick={toggleTheme} sx={{ mt: 1, color: 'inherit', alignSelf: 'flex-end' }}>
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>

      {/* Desktop Layout */}
      <Box sx={{ 
        display: { xs: 'none', md: 'flex' }, 
        alignItems: 'center', 
        gap: '50px', 
        px: { xs: 5, lg: '40px' },
      }}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
          {isLight ? (
            <>
              <span style={{ color: '#4285F4' }}>A</span>
              <span style={{ color: '#EA4335' }}>a</span>
              <span style={{ color: '#FBBC05' }}>y</span>
              <span style={{ color: '#4285F4' }}>o</span>
              <span style={{ color: '#34A853' }}>o</span>
              <span style={{ color: '#FBBC05' }}>g</span>
              <span style={{ color: '#EA4335' }}>l</span>
              <span style={{ color: '#4285F4' }}>e</span>
            </>
          ) : 'Aayoogle'}
        </Typography>
        <SearchBar mainPage={true}/>
        <Box flex={1} />
        <IconButton onClick={toggleTheme} sx={{ color: mode === 'light' ? 'black' : 'inherit', ml: 2 }}>
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
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
              backgroundColor: mode === 'light' ? 'black' : 'white',
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
                  color: mode === 'light' ? 'black' : 'white',
                  fontWeight: '500'
                },
                '&.Mui-selected': {
                  color: mode === 'light' ? 'black' : 'white',
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
