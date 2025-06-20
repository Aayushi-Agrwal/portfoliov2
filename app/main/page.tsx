import { Box, Container, Typography, Tabs, Tab, Card, CardContent, Avatar, IconButton, Button } from "@mui/material";
import { LinkedIn, GitHub, Email, CloudDownload } from "@mui/icons-material";
import Image from "next/image";
import Grid from '@mui/material/Grid';
import { SearchBar } from "../components/SearchBar";
import Header from "../components/Header";

const projects = [
  "/project1.png",
  "/project2.png",
  "/project3.png",
  "/project4.png",
  "/project5.png",
  "/project6.png",
];

export default function Home() {
  return (
    <div>
      <Header />
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} mt={6} gap={4} className="xl:px-55 px-10">
        {/* Left Side */}
        <Box flex={3}>
          <Box mb={4}>
            <Typography variant="body2" color="gray">● Aayushi</Typography>
            <Typography variant="h6" fontWeight="bold" color="#90caf9">Projects</Typography>
            <Typography variant="body2" color="gray">
              Look more into my projects and what I have built so far. Have fun looking into it. Adding sample texts here…
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {projects.map((src, index) => (
              <Grid key={index} component="div">
                <Card sx={{ bgcolor: "#222" }}>
                  <Image
                    src={src}
                    alt={`project-${index}`}
                    width={300}
                    height={200}
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box mt={6}>
            <Typography variant="body2" color="gray">● Aayushi</Typography>
            <Typography variant="h6" fontWeight="bold" color="#90caf9">Experience</Typography>
            <Typography variant="body2" color="gray">
              Look more into my experience and what I have built so far. Adding sample texts here…
            </Typography>
          </Box>
        </Box>

        {/* Profile Card */}
        <Box flex={2}>
          <Card className="!bg-[#1F1F1F] border-[0.5px] border-solid border-[#979DA3]" sx={{boxShadow: 'none', backgroundImage: 'none' }}>
            <Box
              height={100}
              bgcolor="#ccc"
              borderRadius={2}
              mb={2}
            ></Box>

            <CardContent>
              <Typography variant="h6" fontWeight="bold">Aayushi Agarwal</Typography>
              <Typography variant="body2" color="gray">
                I&apos;m a frontend developer passionate about building intuitive, responsive, and accessible web experiences.
                I specialize in React, TypeScript, and modern UI design.
              </Typography>

              <Box mt={2} display="flex" gap={1}>
                <IconButton><LinkedIn sx={{ color: "white" }} /></IconButton>
                <IconButton><GitHub sx={{ color: "white" }} /></IconButton>
                <IconButton><Email sx={{ color: "white" }} /></IconButton>
              </Box>

              <Box mt={2}>
                <Typography fontWeight="bold">Location:</Typography>
                <Typography variant="body2" color="gray">Jaipur, India</Typography>

                <Typography fontWeight="bold" mt={1}>Phone:</Typography>
                <Typography variant="body2" color="gray">+91 8619236367</Typography>

                <Typography fontWeight="bold" mt={1}>Gmail:</Typography>
                <Typography variant="body2" color="gray">aayushiagarwal@gmail.com</Typography>
              </Box>

              <Box mt={2}>
                <Typography fontWeight="bold">Education</Typography>
                <Typography variant="body2" color="gray">
                  IIT Roorkee<br />
                  Bachelor of Technology<br />
                  2021 - 2025
                </Typography>
              </Box>

              <Box mt={2}>
                <Typography fontWeight="bold">Skills</Typography>
                <Box display="flex" gap={2} mt={1}>
                  <Image src="/ts-icon.svg" alt="TS" width={24} height={24} />
                  <Image src="/next-icon.svg" alt="Next" width={24} height={24} />
                  <Image src="/react-icon.svg" alt="React" width={24} height={24} />
                  <Image src="/css-icon.svg" alt="CSS" width={24} height={24} />
                </Box>
              </Box>

              <Button
                variant="outlined"
                startIcon={<CloudDownload />}
                fullWidth
                sx={{ mt: 2, color: "white", borderColor: "white" }}
              >
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
