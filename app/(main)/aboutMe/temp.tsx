"use client";

import React, { useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Divider,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Paper,
  Zoom,
} from "@mui/material";
import {
  ContentCopy,
  Download,
  Email,
  GitHub,
  LinkedIn,
  EmojiObjects,
  EmojiEmotions,
  Favorite,
} from "@mui/icons-material";
import { useThemeMode } from "@/app/components/ThemeContext";
import Image from "next/image";

const profiles = [
  { name: "LinkedIn", icon: <LinkedIn />, href: "https://linkedin.com" },
  { name: "GitHub", icon: <GitHub />, href: "https://github.com" },
  { name: "Gmail", icon: <Email />, href: "mailto:aayushiagrwall@gmail.com" },
];

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "GitHub",
];

const timeline = [
  "2021: Started with HTML & CSS",
  "2022: Built my first React projects",
  "2023: Interned at Apport & Neurastats",
  "2024: Created 14+ frontend projects",
];

const funFacts = [
  { icon: <EmojiObjects />, text: "I build bug-spotting games in React just for fun." },
  { icon: <EmojiEmotions />, text: "I make aesthetic night routine videos and edit like a YouTuber." },
  { icon: <Favorite />, text: "I reorganize my Notion setup weekly — it's therapeutic." },
];

const certificates = [
  "/certificate1.png",
  "/certificate2.png",
  "/certificate3.png",
];

const AboutMe = () => {
  const { mode } = useThemeMode();
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setSnackbarMsg("Copied!");
    setSnackbarOpen(true);
  };

  return (
    <Box px={2} py={6} maxWidth={1000} mx="auto">
      <Card
        className="border-[0.5px] border-solid border-[#979DA3]"
        sx={{
          boxShadow: "none",
          backgroundImage: "none",
          bgcolor: mode === "light" ? "#fdfdfd" : "#1F1F1F",
          p: { xs: 2, md: 4 },
          borderRadius: 4,
        }}
      >
        {/* Header */}
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap={3}
          mb={4}
        >
          <Box
            sx={{
              width: { xs: 140, md: 160 },
              height: { xs: 140, md: 180 },
              overflow: "hidden",
              borderRadius: 3,
              transition: "transform 0.3s ease",
              '&:hover': {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src="/portfolio-photo.jpeg"
              alt="Aayushi Agarwal"
              width={160}
              height={180}
              style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: 12 }}
            />
          </Box>
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h4" fontWeight="bold">
              Aayushi Agarwal
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Frontend Developer ✦ Content Creator ✦ React Fanatic
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" mb={4} sx={{ fontSize: "1rem", lineHeight: 1.7 }}>
          Hey there! I’m a frontend developer from Jaipur, crafting clean, accessible UIs with React and TypeScript. From building mini games and dashboards to editing aesthetic videos — I love blending creativity with code.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Profiles */}
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mb={4}>
          {profiles.map((profile, index) => (
            <Button
              key={index}
              variant="outlined"
              startIcon={profile.icon}
              href={profile.href}
              target="_blank"
              rel="noopener"
              sx={{
                borderRadius: 4,
                px: 3,
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              {profile.name}
            </Button>
          ))}
        </Box>

        {/* Skills */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          💻 Skills & Tools
        </Typography>
        <Box display="flex" gap={1} flexWrap="wrap" mb={4}>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} variant="outlined" sx={{ fontSize: 14, borderRadius: 2 }} />
          ))}
        </Box>

        {/* Journey Timeline */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          🚀 My Journey
        </Typography>
        <Stepper orientation="vertical" activeStep={-1} sx={{ mb: 4 }}>
          {timeline.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Fun Facts */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          ✨ Fun Facts
        </Typography>
        <Grid container spacing={2} mb={4}>
          {funFacts.map((fact, index) => (
            <Grid component='div' key={index}>
              <Paper elevation={2} sx={{ p: 2, borderRadius: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                {fact.icon}
                <Typography variant="body2">{fact.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Certificates */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          📜 Certificates
        </Typography>
        <Grid container spacing={2} mb={4}>
          {certificates.map((src, index) => (
            <Grid component='div' key={index}>
              <Zoom in>
                <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
                  <Image
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    width={300}
                    height={200}
                    style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  />
                </Box>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box textAlign="center" mt={6}>
          <Typography variant="h6" fontWeight="bold">
            Let’s build something amazing together.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Open to roles, freelance collabs, or just a fun chat. Let’s connect 🤝
          </Typography>
          <Button
            variant="contained"
            startIcon={<Download />}
            href="/resume.pdf"
            sx={{ mt: 2, textTransform: "none", borderRadius: 3 }}
          >
            Download Resume
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default AboutMe;