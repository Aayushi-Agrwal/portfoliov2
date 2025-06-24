import React from 'react'
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useThemeMode } from '@/app/components/ThemeContext';

const MainPageLink = ({title, description, route}: {title: string , description: string, route: string}) => {
  const router = useRouter();
  const { mode } = useThemeMode();
  
  return (
    <Box mb={4} sx={{cursor: 'pointer'}} onClick={() => router.push(route)}>
        <Box display="flex" alignItems="center" gap={1}>
            <img src={mode === 'light' ? '/profile-icon-dark.png' : '/profile-icon.jpg'} alt="Aayushi" className="rounded-full object-cover h-[20px] w-[20px]"/>
            <Typography variant="body2" color={mode === 'light' ? 'black' : 'white'}>Aayushi</Typography>
        </Box>
        <Typography variant="h6" fontWeight="bold" color={mode === 'light' ? '#070097' : '#90caf9'} mt={0.5}
          sx={{
            textDecoration: 'none',
            transition: 'text-decoration 0.2s',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >{title}</Typography>
        <Typography variant="body2" color={mode === 'light' ? '#5D5D5D' : 'white'}>
            {description}
        </Typography>
    </Box>
  )
}

export default MainPageLink