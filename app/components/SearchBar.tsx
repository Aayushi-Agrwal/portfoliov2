import { Box, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export const SearchBar = ({mainPage = false} : {mainPage?: Boolean}) => (
  <Box
    display="flex"
    alignItems="center"
    bgcolor="#5c5f63"
    borderRadius={10}
    px={2}
    py={1}
    width="100%"
    maxWidth={mainPage ? 800 : 600}
    my={3}
  >
    {!mainPage && <SearchIcon sx={{ color: "#aaa", mr: 1 }} />}
    <InputBase autoFocus={true} sx={{ color: "white", width: "100%" , pl: mainPage ? '8px' : 0}} />
    {mainPage && <ClearIcon sx={{ color: "#aaa", mr: 1 }} />}
    {/* <Box
      sx={{
        width: '0.5px',
        backgroundColor: '#aaa',
        mr: 1,
        height: '100%',
      }}
    /> */}
    {mainPage && <SearchIcon sx={{ color: "#aaa", mr: 1 }} />}
  </Box>
);