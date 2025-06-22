'use client'

import { Box, Container, Typography, Tabs, Tab, Card, CardContent, Avatar, IconButton, Button, Snackbar, Alert } from "@mui/material";
import { LinkedIn, GitHub, Email, CloudDownload, ContentCopy } from "@mui/icons-material";
import Image from "next/image";
import Grid from '@mui/material/Grid';
import { SearchBar } from "../components/SearchBar";
import Header from "../components/Header";
import { useState } from "react";
import MainPageLink from "./components";

const projects = [
  "/project1.png",
  "/project2.png",
  "/project3.png",
  "/project4.png",
  "/project5.png",
  "/project6.png",
];

const profiles = [
  {
    name: "LinkedIn",
    icon: <LinkedIn />
  },
  {
    name: "Github",
    icon: <GitHub />
  },
  {
    name: "Gmail",
    icon: <Email />
  }
]

const skills = [
  { name: "React.js", src: "/react.png" },
  { name: "Next.js", src: "/next.png" },
  { name: "TypeScript", src: "/typescript.png" },
  { name: "Tailwind CSS", src: "/tailwind.png" },
  { name: "Node.js", src: "/node.png" },
  { name: "Express.js", src: "/express.png" },
  { name: "MongoDB", src: "/mongodb.png" },
  { name: "GitHub", src: "/github.png" },
]

export default function Home() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setSnackbarMsg('Copied!');
    setSnackbarOpen(true);
  };

  return (
    <div>
      <Header />
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} mt={6} gap={4} sx={{px: {xs: '40px', xl: '220px'} }}>
        {/* Profile Card - Mobile First */}
        <Box flex={3} order={{ xs: 1, md: 2 }}>
          <Card className="!bg-[#1F1F1F] border-[0.5px] border-solid border-[#979DA3]" sx={{boxShadow: 'none', backgroundImage: 'none' }}>
            <Box
              height={200}
              borderRadius={2}
              mb={2}
              sx={{
                backgroundImage: `
                  radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.6) 100%),
                  url(/portfolio-photo.jpeg)
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></Box>

            <CardContent>
              <Typography variant="h6" fontWeight="bold">Aayushi Agarwal</Typography>
              <Typography variant="body2" color="white" className="pt-2">
                I&apos;m a frontend developer passionate about building intuitive, responsive, and accessible web experiences. I specialize in React, TypeScript, and modern UI design — turning ideas into smooth, user-first interfaces.
              </Typography>

              <Box mt={2} display="flex" gap={3}>
                {profiles.map((profile, index) => (
                  <Box 
                    key={index}
                    className="flex justify-center items-center border border-solid border-[#979DA3] px-4 py-1 rounded-4xl cursor-pointer transition-all duration-300 group"
                    sx={{
                      '&:hover .text-content': {
                        opacity: 0,
                      },
                      '&:hover .icon-content': {
                        opacity: 1,
                      }
                    }}
                  >
                    <span className="text-content transition-opacity duration-100">{profile.name}</span>
                    <Box 
                      className="icon-content absolute opacity-0 transition-opacity duration-300" 
                      sx={{ color: "white" }}
                    >
                      {profile.icon}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box mt={4}>
                <Typography variant="body2">
                  <span style={{ fontWeight: 'bold' }}>Location:</span> Jaipur, India
                </Typography>

                <Typography variant="body2" mt={1} 
                  sx={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    '&:hover': { opacity: 0.8 }
                  }}
                  onClick={() => handleCopy('+91 8619236367')}
                >
                  <span style={{ fontWeight: 'bold' }}>Phone:</span> +91 8619236367
                  <ContentCopy sx={{ fontSize: '14px', opacity: 0.7, color: 'gray' }} />
                </Typography>

                <Typography variant="body2" mt={1}
                  sx={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    '&:hover': { opacity: 0.8 }
                  }}
                  onClick={() => handleCopy('aayushiagrwall@gmail.com')}
                >
                  <span style={{ fontWeight: 'bold' }}>Gmail:</span> aayushiagrwall@gmail.com
                  <ContentCopy sx={{ fontSize: '14px', opacity: 0.7, color: 'gray' }} />
                </Typography>
              </Box>

              <Box mt={4}>
                <Typography fontWeight="bold">Education</Typography>
                <Box display="flex" alignItems="center" gap={2} mt={1}>
                  <Image 
                    src="/education-icon.jpg" 
                    alt="Education" 
                    width={60} 
                    height={60} 
                  />
                  <Typography variant="body2">
                    <span className="font-bold">IIT Roorkee<br /></span>
                    Bachelor of Technology<br />
                    <span className="text-[#4285F4]">2021 - 2025</span>
                  </Typography>
                </Box>
              </Box>

              <Box mt={4}>
                <Typography fontWeight="bold">Skills</Typography>
                <Box display="flex" gap={2} mt={1}>
                  {skills.map((skill, index) => (
                    <Image 
                      key={index}
                      src={skill.src} 
                      alt={skill.name} 
                      width={24} 
                      height={24} 
                      style={{ objectFit: 'contain' }}
                    />
                  ))}
                </Box>
              </Box>

              <Button
                variant="outlined"
                startIcon={<CloudDownload />}
                fullWidth
                sx={{ mt: 4, color: "white", borderColor: "white" }}
              >
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Left Side - Projects & Experience */}
        <Box flex={5} order={{ xs: 2, md: 1 }}>
          <MainPageLink title='Projects' description="Look more into my projects and what I have built so far. Have fun looking into it. Adding sample texts here…"/>

          <Grid container spacing={2} mb={4}>
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

          <MainPageLink title='Experience' description="Look more into my experience. Have fun looking into it. Adding sample texts here…"/>
          <MainPageLink title='About me' description="Know more about me. Have fun looking into it. Adding sample texts here…"/>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ minWidth: '100px', p: 1, fontSize: 14 }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}
