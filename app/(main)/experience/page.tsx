'use client'

import { experiences } from '@/app/components/constant';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { MouseEventHandler, useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

export default function ExperiencePage() {
  const [experince, setExperience] = useState<number>(0)
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const theme = useTheme();

  useEffect(() => {
    if (experienceRefs.current[experince]) {
      experienceRefs.current[experince]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [experince]);

  return (
    <Box
      sx={{
        display: 'flex',
        height: 'calc(100vh - 150px)',
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          width: '35vw',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          overflowY: 'auto',
          boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        }}
      >
        {experiences.map((experience, index) => {
          return (
            <div ref={el => { experienceRefs.current[index] = el; }} key={index}>
              <ExperienceCard
                company={experience.company}
                role={experience.role}
                date={experience.date}
                description={experience.description}
                onclick={() => setExperience(index)}
                experience={experince}
                index={index}
              />
            </div>
          )
        })}
      </Box>

      {/* Static Map + Trajectory Overlay */}
      <Box
        sx={{
          width: '65vw',
          position: 'relative',
        }}
      >
        <Image
          src="/experience.jpg"
          alt="Experience Trajectory Map"
          layout="fill"
          objectFit="cover"
        />
        {/* Trajectory Overlay */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 900 900"
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        >
          {/* Zig-zag path */}
          <polyline
            points="80,700 250,600 400,400 650,300 800,200"
            fill="none"
            stroke={theme.palette.mode === 'dark' ? '#fff' : '#222'}
            strokeWidth="6"
            strokeLinejoin="round"
            filter="drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15))"
          />
          <circle cx="80" cy="700" r="18" fill={theme.palette.primary.main} stroke="#fff" strokeWidth="4" />
          {/* Neurastats Web Dev */}
          <circle cx="250" cy="600" r="18" fill="#43a047" stroke="#fff" strokeWidth="4" />
          {/* IIT Roorkee */}
          <circle cx="400" cy="400" r="18" fill="#fbc02d" stroke="#fff" strokeWidth="4" />
          {/* Freelance */}
          <circle cx="650" cy="300" r="18" fill="#8e24aa" stroke="#fff" strokeWidth="4" />
          {/* Neurastats Software Dev */}
          <circle cx="800" cy="200" r="18" fill="#d32f2f" stroke="#fff" strokeWidth="4" />
        </svg>
        {experiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              left: exp.left,
              top: exp.top,
              width: 160,
              scale: experince === index ? 1.1 : 1,
              cursor: 'pointer'
            }}
            onClick={() => setExperience(index)}
          >
            <Box
              sx={{
                bgcolor: experince === index ? theme.palette.action.selected : theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: 2,
                p: 1.2,
                color: theme.palette.text.primary,
                border: experince === index ? `1px solid ${theme.palette.secondary.main}` : 'none'
              }}
            >
              <Typography fontWeight="bold" fontSize={15}>
                {exp.company}
              </Typography>
              <Typography fontSize={13}>
                {exp.role}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  description: string;
  onclick: MouseEventHandler<HTMLDivElement>,
  experience: number,
  index: number
}

function ExperienceCard({ company, role, date, description, onclick, experience, index }: ExperienceCardProps) {
  const theme = useTheme();
  return (
    <Box sx={{
      p: 2,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 2,
      color: theme.palette.text.primary,
      bgcolor: experience === index ? theme.palette.action.selected : theme.palette.background.paper,
      cursor: 'pointer',
      '&:hover': {
        bgcolor: experience === index ? theme.palette.action.selected : theme.palette.action.hover
      }
    }} onClick={onclick}>
      <Typography fontWeight="bold">{company}</Typography>
      <Typography variant="body2" sx={{ fontWeight: 500 }}>{role}</Typography>
      <Typography variant="body2" color="green" sx={{ mb: 1 }}>{date}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
}