import { Button, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useThemeMode } from "./ThemeContext";

export const ActionButton = ({ 
  children, 
  bgColor,
  href
}: { 
  children: ReactNode, 
  bgColor?: string,
  href?: string 
}) => {
  const { mode } = useThemeMode();
  const isLight = mode === 'light';
  return (
  <Button
    variant="outlined"
    href={href}
    sx={{
      bgcolor: isLight ? '#F8F9FA' : '#303134',
      color: isLight ? '#202124' : "white" ,
      textTransform: "none",
      m: 1,
      borderColor: isLight ? '#F8F9FA' : '#303134',
      '&:hover': {
        borderColor: '#979DA3'
      },
    }}
  >
    {children}
  </Button>
  )
};