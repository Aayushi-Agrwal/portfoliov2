'use client'

import { Box, Typography, Card, CardContent, Button, Snackbar, Alert } from "@mui/material";
import { LinkedIn, GitHub, Email, Download, ContentCopy, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import Grid from '@mui/material/Grid';
import { useState } from "react";
import MainPageLink from "./components";

const projects = [
  "/projects/medi-sync.png",
  "/projects/portfolio-screenshot.png",
  "/projects/expense-tracker.png",
  "/projects/profSS.png",
  "/projects/neurastats.png",
  "/projects/callo.png",
  "/projects/githubexplorer.png",
  "/projects/blog.png",
  "/projects/weather.png",
  "/projects/todo.png",
  "/projects/huddleUp.png",
  "/projects/notes.png",
  "/projects/MindTasker.png",
  "/projects/OccasionOwl.png",
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
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects ? projects : projects.slice(0, 3);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setSnackbarMsg('Copied!');
    setSnackbarOpen(true);
  };

  return (
    <div>
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

              <Box mt={2} display="flex" gap={{ xs: 1.5, md: 3 }} sx={{
                overflowX: { xs: 'auto', md: 'visible' },
                whiteSpace: { xs: 'nowrap', md: 'normal' },
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}>
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
                <Box display="flex" gap={2} mt={1} sx={{
                overflowX: { xs: 'auto', md: 'visible' },
                whiteSpace: { xs: 'nowrap', md: 'normal' },
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}>
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
                color="primary"
                startIcon={<Download />}
                fullWidth
                sx={{
                  mt: 6,
                  borderRadius: '8px',
                  px: 4,
                  fontWeight: 500,
                  background: '#28292A',
                  color: 'white',
                  borderColor: '#3C4043',
                  textTransform: 'none',
                  zIndex: 2,
                  '&:hover': {
                    background: '#3C4043',
                    borderColor: '#3C4043',
                    color: 'white',
                  },
                }}
              >
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Left Side - Projects & Experience */}
        <Box flex={5} order={{ xs: 2, md: 1 }}>
          <MainPageLink title='Projects' description="Look more into my projects and what I have built so far. Have fun looking into it. Adding sample texts here…" route='/projects'/>

          <Typography variant="h6" fontWeight="bold" my={2}>Projects</Typography>
          <Grid container spacing={2} mb={4}>
            {projectsToShow.map((src, index) => (
              <Grid key={index} component="div">
                <Card sx={{ bgcolor: "#222" , borderRadius: '16px', cursor: 'pointer' }}>
                  <img
                    src={src}
                    alt={`project-${index}`}
                    className="h-[100px] w-[120px] sm:h-[150px] sm:w-[200px] object-contain rounded-2xl"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          {!showAllProjects && (
            <Box position="relative" display="flex" justifyContent="center" alignItems="center" my={4} height={40}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: '0.5px',
                  bgcolor: '#979DA3',
                  zIndex: 1,
                }}
              />
              <Button
                color="primary"
                sx={{
                  borderRadius: '999px',
                  px: 4,
                  fontWeight: 500,
                  background: '#28292A',
                  color: 'white',
                  borderColor: '#3C4043',
                  textTransform: 'none',
                  zIndex: 2,
                  height: '40px',
                  width: '300px',
                  '&:hover': {
                    background: '#3C4043',
                    borderColor: '#3C4043',
                    color: 'white',
                  },
                }}
                onClick={() => setShowAllProjects(true)}
              >
                More projects <ArrowForwardIos sx={{ fontSize: 12, ml: 2, color: '#9E9E9E' }} />
              </Button>
            </Box>
          )}

          <MainPageLink title='Experience' description="Look more into my experience. Have fun looking into it. Adding sample texts here…" route='/experience'/>
          <MainPageLink title='About me' description="Know more about me. Have fun looking into it. Adding sample texts here…" route='/aboutMe'/>
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
