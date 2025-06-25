'use client'

import { Box, Typography, Button, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { projectData } from '@/app/components/constant';
import Link from 'next/link';
import Image from 'next/image';

export default function LuckyPage() {
  const [randomProject, setRandomProject] = useState<typeof projectData[0] | null>(null);

  useEffect(() => {
    const activeProjects = projectData.filter(p => p.url); // only clickable ones
    const random = activeProjects[Math.floor(Math.random() * activeProjects.length)];
    setRandomProject(random);
  }, []);

  if (!randomProject) return <Typography>Loading your luck...</Typography>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      minHeight="80vh"
      textAlign="center"
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        🎉 Your Lucky Pick: {randomProject.title}
      </Typography>

      <Image
        src={randomProject.picture}
        alt={randomProject.title}
        width={600}
        height={400}
        style={{ borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', objectFit: 'cover' }}
      />

      <Typography variant="body1" mt={3} maxWidth={600}>
        {randomProject.description}
      </Typography>

      <Box mt={2} display="flex" gap={1} flexWrap="wrap" justifyContent="center">
        {randomProject.technologies.map((tech, idx) => (
          <Chip key={idx} label={tech} />
        ))}
      </Box>

      <Link href={randomProject.url!} target="_blank">
        <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
          Visit Project
        </Button>
      </Link>
    </Box>
  );
}
