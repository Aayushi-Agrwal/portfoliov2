import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@mui/material/styles';
import { useState, KeyboardEvent } from "react";

interface SearchBarProps {
  mainPage?: boolean;
  onSearch?: (query: string) => void;
}

export const SearchBar = ({ mainPage = false, onSearch }: SearchBarProps) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const [query, setQuery] = useState('');

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch?.('');
  };

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
      {!mainPage && (
        <SearchIcon sx={{ color: isLight ? '#888' : '#aaa', mr: 1 }} />
      )}

      <InputBase
        autoFocus
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        sx={{
          color: isLight ? '#222' : 'white',
          width: "100%",
          pl: mainPage ? '8px' : 0
        }}
      />

      {query && (
        <IconButton onClick={handleClear} size="small">
          <ClearIcon sx={{ color: isLight ? '#888' : '#aaa' }} />
        </IconButton>
      )}

      {mainPage && (
        <IconButton onClick={() => onSearch?.(query.trim())} size="small">
          <SearchIcon sx={{ color: isLight ? '#888' : '#aaa' }} />
        </IconButton>
      )}
    </Box>
  );
};
