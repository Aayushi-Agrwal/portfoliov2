import { Box, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => (
  <Box
    display="flex"
    alignItems="center"
    bgcolor="#5c5f63"
    borderRadius={10}
    px={2}
    py={1}
    width="100%"
    maxWidth={600}
    my={3}
  >
    <SearchIcon sx={{ color: "#aaa", mr: 1 }} />
    <InputBase autoFocus={true} sx={{ color: "white", width: "100%" }} />
  </Box>
);