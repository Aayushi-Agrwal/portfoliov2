import React from 'react'
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const MainPageLink = ({title, description, route}: {title: string , description: string, route: string}) => {
  const router = useRouter();
  return (
    <Box mb={4} sx={{cursor: 'pointer'}} onClick={() => router.push(route)}>
        <Box display="flex" alignItems="center" gap={1}>
            <img src="/profile-icon.jpg" alt="Aayushi" className="rounded-full object-cover h-[20px] w-[20px]"/>
            <Typography variant="body2">Aayushi</Typography>
        </Box>
        <Typography variant="h6" fontWeight="bold" color="#90caf9" mt={0.5}>{title}</Typography>
        <Typography variant="body2">
            {description}
        </Typography>
    </Box>
  )
}

export default MainPageLink