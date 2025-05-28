import { Box } from "@mui/material";
import { ReactNode } from "react";

export const CenteredContainer = ({ children, bgColor = "#1c1c1c"}: { children: ReactNode, bgColor: string }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    bgcolor={bgColor}
  >
    {children}
  </Box>
);