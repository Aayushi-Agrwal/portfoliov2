"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { shuffle } from "lodash";

const techLogos = [
  { name: "React", src: "/logos/react.png" },
  { name: "TypeScript", src: "/logos/typescript.png" },
  { name: "Tailwind", src: "/logos/tailwind.png" },
  { name: "Next.js", src: "/logos/nextjs.png" },
  { name: "JavaScript", src: "/logos/javascript.png" },
  { name: "CSS", src: "/logos/css.png" },
];

const generateBoard = () => shuffle([...techLogos, ...techLogos]);

export default function StackMatchingGame() {
  const [cards, setCards] = useState(generateBoard);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [winTime, setWinTime] = useState<number | null>(null);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      setDisabled(true);

      if (cards[first].name === cards[second].name) {
        setMatched((prev) => [...prev, first, second]);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  }, [flipped, cards]);

  useEffect(() => {
    if (matched.length === cards.length && startTime) {
      setWinTime(Math.floor((Date.now() - startTime) / 1000));
    }
  }, [matched]);

  const handleFlip = (index: number) => {
    if (disabled || flipped.includes(index) || matched.includes(index)) return;
    if (flipped.length === 0 && !startTime) setStartTime(Date.now());
    setFlipped((prev) => [...prev, index]);
  };

  const restart = () => {
    setCards(generateBoard());
    setFlipped([]);
    setMatched([]);
    setDisabled(false);
    setStartTime(null);
    setWinTime(null);
  };

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" fontWeight="bold" mb={2}>Stack Matching Game</Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 100px)"
        gap={2}
        justifyContent="center"
        mb={4}
      >
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          return (
            <Box
              key={index}
              onClick={() => handleFlip(index)}
              sx={{
                width: 100,
                height: 100,
                bgcolor: '#eee',
                borderRadius: 2,
                boxShadow: 2,
                cursor: isFlipped || disabled ? 'default' : 'pointer',
                position: 'relative',
                perspective: 1000,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: isFlipped ? 'rotateY(180deg)' : 'none'
                }}
              >
                <Box
                  sx={{
                    backfaceVisibility: 'hidden',
                    width: '100%',
                    height: '100%',
                    bgcolor: '#888',
                    borderRadius: 2,
                  }}
                />
                <Box
                  sx={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: '#fff',
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 1,
                  }}
                >
                  <Image src={card.src} alt={card.name} width={60} height={60} />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      {winTime !== null && (
        <Typography mb={2} color="green">
          🎉 You matched all cards in {winTime} seconds!
        </Typography>
      )}

      <Button variant="contained" color="primary" onClick={restart}>
        Restart Game
      </Button>
    </Box>
  );
}
