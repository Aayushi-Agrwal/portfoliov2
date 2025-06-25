"use client";

import React from "react";
import { Box, Typography, Card, CardActionArea, CardContent } from "@mui/material";
import Link from "next/link";

const games = [
  {
    title: "Project Spotlight",
    description: "Test your skills with the Project Spotlight game.",
    href: "/lucky/games/projectSpotlight",
  },
  {
    title: "Stack Matching",
    description: "Challenge your memory with Stack Matching.",
    href: "/lucky/games/stackMatching",
  },
  {
    title: "Typing Game",
    description: "Improve your typing speed and accuracy.",
    href: "/lucky/games/typingGame",
  },
];

export default function MiniGamesPage() {
  return (
    <Box px={4} py={6} maxWidth={800} mx="auto">
      <Typography variant="h3" fontWeight="bold" mb={4} align="center">
        🎮 Mini Games Hub
      </Typography>

      <Box display="grid" gap={3}>
        {games.map(({ title, description, href }) => (
          <Card key={href} variant="outlined" sx={{ bgcolor: "#121212" }}>
            <Link href={href} passHref legacyBehavior>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" fontWeight="600" gutterBottom color="primary.main">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
