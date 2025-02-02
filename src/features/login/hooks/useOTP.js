import { useEffect, useState } from 'react';

const INITIAL_TIME = 299; // 5 minutes in seconds

const useOTP = () => {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());

  // Format time to MM:SS with padding
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Reset function for resend
  const resetTimer = () => {
    setTimeLeft(INITIAL_TIME);
    setLastUpdateTime(Date.now());
    localStorage.setItem('otpStartTime', Date.now().toString());
  };

  useEffect(() => {
    // Store initial time in localStorage when component mounts
    if (!localStorage.getItem('otpStartTime')) {
      localStorage.setItem('otpStartTime', Date.now().toString());
    }

    const handleVisibilityChange = () => {
      console.log(document.visibilityState === 'visible');
      if (document.visibilityState === 'visible') {
        // When tab becomes visible, calculate elapsed time
        const startTime = parseInt(localStorage.getItem('otpStartTime') || '0');
        const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        const remainingTime = Math.max(INITIAL_TIME - elapsedSeconds, 0);
        setTimeLeft(remainingTime);
        setLastUpdateTime(Date.now());
      }
    };

    const timer = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastUpdateTime) / 1000;

      setTimeLeft((prevTime) => {
        const newTime = Math.max(prevTime - deltaTime, 0);
        return newTime; // Will stop at 0 instead of resetting
      });

      setLastUpdateTime(currentTime);
    }, 100); // Update more frequently for smoother countdown

    // Add visibility change listener
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [lastUpdateTime]);

  return {
    formattedTime: formatTime(timeLeft),
    isExpired: timeLeft === 0,
    resetTimer,
  };
};

export default useOTP;
