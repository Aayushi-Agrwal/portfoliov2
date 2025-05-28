import { Button } from "@mui/material";
import { ReactNode } from "react";

export const ActionButton = ({ children, bgColor}: { children: ReactNode, bgColor?: string }) => (
  <Button
    variant="outlined"
    sx={{
      bgcolor: {bgColor},
      color: "white",
      textTransform: "none",
      m: 1,
      borderColor: '#303134',
      '&:hover': {
        borderColor: '#979DA3'
      },
    }}
  >
    {children}
  </Button>
);