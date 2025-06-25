'use client'

import { Typography, Box } from "@mui/material";
import { CenteredContainer } from "./components/CenteredContainer";
import { SearchBar } from "./components/SearchBar";
import { ActionButton } from "./components/ActionButton";
import { useThemeMode } from "./components/ThemeContext";
import { useTheme } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Home() {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isLight = mode === 'light';

  return (
    <CenteredContainer bgColor={isLight ? 'white' : '#202124'}>
      <Box sx={{ position: 'absolute', top: 24, right: 24 }}>
        <IconButton onClick={toggleTheme} sx={{ color: isLight ? 'black' : 'white' }}>
          {isLight ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>
      <Typography variant="h2" fontWeight="bold" color={isLight ? 'inherit' : 'white'}>
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
      <SearchBar />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <ActionButton href="/experience">Experience</ActionButton>
        <ActionButton href="/projects">Projects</ActionButton>
        <ActionButton href="/aboutMe">About me</ActionButton>
        <ActionButton >I'm Feeling Lucky</ActionButton>
      </Box>
    </CenteredContainer>
  );
}