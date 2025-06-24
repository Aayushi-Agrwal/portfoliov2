'use client'

import { experiences } from '@/app/components/constant';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { MouseEventHandler, useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import type { TouchEvent, MouseEvent } from 'react';
import { useThemeMode } from '@/app/components/ThemeContext';

export default function ExperiencePage() {
  const [experince, setExperience] = useState<number>(0)
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPeek, setDrawerPeek] = useState(true);

  useEffect(() => {
    if (experienceRefs.current[experince]) {
      experienceRefs.current[experince]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [experince]);

  return (
    <Box
      sx={{
        display: 'flex',
        height: {xs: '70vh', sm: 'calc(100vh - 220px)', md:'calc(100vh - 150px)'},
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Sidebar or Drawer */}
      {isMobile ? (
        <MobileExperienceDrawer experiences={experiences} experince={experince} setExperience={setExperience} />
      ) : (
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
      )}

      {/* Static Map + Trajectory Overlay */}
      <Box
        sx={{
          width: isMobile ? '100vw' : '65vw',
          height: isMobile ? 'calc(100% - 20vh)' : '100%',
          position: 'relative',
        }}
      >
        {/* Background image */}
        <Image
          src={mode === 'light' ? "/experience.jpg" : "/experience-dark.png"}
          alt="Experience Trajectory Map"
          fill
          style={{ objectFit: 'cover' }}
        />

        {/* Zig-zag path SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 900 900"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}
        >
          <polyline
            points="80,700 250,600 400,400 650,300 800,200"
            fill="none"
            stroke={theme.palette.mode === 'dark' ? '#fff' : '#222'}
            strokeWidth="6"
            strokeLinejoin="round"
            filter="drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15))"
          />
        </svg>

        {/* HTML overlays mapped with relative coordinates */}
        {experiences.map((exp, index) => {
          const leftPercent = (exp.cx / 900) * 100;
          const topPercent = (exp.cy / 900) * 100;
          const midTopPercent = (exp.midcy / 900) * 100;

          return (
            <Box
              key={index}
              onClick={() => setExperience(index)}
              sx={{
                position: 'absolute',
                top: {
                  xs: `${topPercent}%`,
                  sm: `${midTopPercent}%`,
                  md: `${topPercent}%`, 
                },
                left: `${leftPercent}%`,
                transform: 'translate(-50%, -50%)',
                width: {xs: 100, md: 120, lg: 160},
                scale: experince === index ? 1.1 : 1,
                cursor: 'pointer',
                zIndex: experince === index ? 3 : 2,
                transition: 'scale 0.2s ease',
              }}
            >
              <Box
                sx={{
                  bgcolor:
                    experince === index
                      ? theme.palette.action.selected
                      : theme.palette.background.paper,
                  borderRadius: 2,
                  boxShadow: 2,
                  p: 1.2,
                  color: theme.palette.text.primary,
                  border:
                    experince === index
                      ? `1px solid ${theme.palette.secondary.main}`
                      : 'none',
                }}
              >
                <Typography fontWeight="bold" sx={{ fontSize: { xs: 13, md: 15 }}}>
                  {exp.company}
                </Typography>
                <Typography fontSize={13} sx={{display: {xs: 'none', md: 'inherit'}}}>{exp.role}</Typography>
              </Box>
            </Box>
          );
        })}
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

interface MobileExperienceDrawerProps {
  experiences: any[];
  experince: number;
  setExperience: (index: number) => void;
}

function MobileExperienceDrawer({ experiences, experince, setExperience }: MobileExperienceDrawerProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [height, setHeight] = useState('25vh');
  const drawerRef = useRef(null);

  useEffect(() => {
    setHeight(open ? '80vh' : '25vh');
  }, [open]);

  // Drag gesture handlers
  const handleDragStart = (e: TouchEvent<Element> | MouseEvent<Element>) => {
    if ('touches' in e) {
      setDragStartY(e.touches[0].clientY);
    } else {
      setDragStartY(e.clientY);
    }
  };
  const handleDragMove = (e: TouchEvent<Element> | MouseEvent<Element>) => {
    if (dragStartY === null) return;
    let clientY;
    if ('touches' in e) {
      clientY = e.touches[0].clientY;
    } else {
      clientY = e.clientY;
    }
    const delta = clientY - dragStartY;
    const vh = window.innerHeight;
    let newHeight = open ? vh * 0.8 - delta : vh * 0.1 - delta;
    newHeight = Math.max(vh * 0.1, Math.min(vh * 0.8, newHeight));
    setHeight(`${(newHeight / vh) * 100}vh`);
  };
  const handleDragEnd = (e: TouchEvent<Element> | MouseEvent<Element>) => {
    if (dragStartY === null) return;
    let clientY;
    if ('changedTouches' in e) {
      clientY = e.changedTouches[0].clientY;
    } else {
      clientY = e.clientY;
    }
    const delta = clientY - dragStartY;
    setDragStartY(null);
    if (open) {
      if (delta > 50) setOpen(false);
      else setOpen(true);
    } else {
      if (delta < -50) setOpen(true);
      else setOpen(false);
    }
  };

  return (
    <Box
      ref={drawerRef}
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1200,
        height,
        bgcolor: theme.palette.background.paper,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        boxShadow: '0 -2px 16px rgba(0,0,0,0.12)',
        transition: 'height 0.3s',
        overflowY: 'auto',
        p: 2,
        touchAction: 'none',
        WebkitTouchCallout: 'none',
        userSelect: 'none',
      }}
      onMouseDown={handleDragStart}
      onMouseMove={dragStartY !== null ? handleDragMove : undefined}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Handle */}
      <Box sx={{ width: 40, height: 4, borderRadius: 2, bgcolor: theme.palette.divider, mb: 1, mx: 'auto', cursor: 'grab' }} onClick={() => setOpen(!open)} />
      {open ? (
        experiences.map((experience, index) => (
          <div key={index} className="mb-4">
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
        ))
      ) : (
        <div>
          <ExperienceCard
            company={experiences[experince].company}
            role={experiences[experince].role}
            date={experiences[experince].date}
            description={experiences[experince].description}
            onclick={() => setOpen(true)}
            experience={experince}
            index={experince}
          />
        </div>
      )}
    </Box>
  );
}