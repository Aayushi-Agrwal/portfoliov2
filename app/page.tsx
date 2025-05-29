import { Typography, Box } from "@mui/material";
import { CenteredContainer } from "./components/CenteredContainer";
import { SearchBar } from "./components/SearchBar";
import { ActionButton } from "./components/ActionButton";

export default function Home() {
  return (
    <CenteredContainer bgColor="#202124">
      <Typography variant="h2" fontWeight="bold" color="white">
        Aayoogle
      </Typography>
      <SearchBar />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <ActionButton bgColor="#303134" href="/experience">Experience</ActionButton>
        <ActionButton bgColor="#303134">Projects</ActionButton>
        <ActionButton bgColor="#303134">About me</ActionButton>
        <ActionButton bgColor="#303134">I'm Feeling Lucky</ActionButton>
      </Box>
    </CenteredContainer>
  );
}