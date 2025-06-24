import { Box, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@mui/material/styles';

export const SearchBar = ({mainPage = false} : {mainPage?: Boolean}) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={isLight ? '#fff' : '#5c5f63'}
      borderRadius={12}
      px={2}
      py={1}
      width="100%"
      maxWidth={mainPage ? 800 : 600}
      my={3}
      boxShadow={isLight ? '0 2px 8px rgba(60,64,67,0.15)' : 'none'}
      border={isLight ? '1px solid #eee' : 'none'}
    >
      {!mainPage && <SearchIcon sx={{ color: isLight ? '#888' : '#aaa', mr: 1 }} />}
      <InputBase autoFocus={true} sx={{ color: isLight ? '#222' : 'white', width: "100%", pl: mainPage ? '8px' : 0 }} />
      {mainPage && <ClearIcon sx={{ color: isLight ? '#888' : '#aaa', mr: 1 }} />}
      {mainPage && <SearchIcon sx={{ color: isLight ? '#888' : '#aaa', mr: 1 }} />}
    </Box>
  );
}