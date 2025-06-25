// app/lucky/game/page.tsx
'use client';

import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const WORDS = ['React', 'Next.js', 'TypeScript', 'Portfolio', 'API', 'Tailwind', 'Frontend'];

export default function TypingGamePage() {
  const [word, setWord] = useState('');
  const [input, setInput] = useState('');
  const [started, setStarted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const random = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(random);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!started) {
      setStarted(true);
      setStartTime(Date.now());
    }

    const value = e.target.value;
    setInput(value);

    if (value === word) {
      setEndTime(Date.now());
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    const random = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(random);
    setInput('');
    setStarted(false);
    setCompleted(false);
    setStartTime(null);
    setEndTime(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh" p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        ⌨️ Typing Challenge
      </Typography>

      <Typography variant="h6" gutterBottom>
        Type the word:
      </Typography>

      <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
        {word}
      </Typography>

      <input
        value={input}
        onChange={handleInputChange}
        placeholder="Start typing..."
        style={{
          padding: '12px 20px',
          fontSize: '16px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          marginTop: '12px',
        }}
      />

      {completed && endTime && startTime && (
        <Typography mt={3} variant="h6" color="green">
          🎉 You typed it in {(endTime - startTime) / 1000}s!
        </Typography>
      )}

      <Button onClick={handleRestart} variant="outlined" sx={{ mt: 4 }}>
        Try Another
      </Button>
    </Box>
  );
}