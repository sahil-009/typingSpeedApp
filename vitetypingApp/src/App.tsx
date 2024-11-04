import './App.css';
import { faker } from '@faker-js/faker';
import React, { useState, useEffect } from 'react';

function App() {
  const fakeWords = faker.lorem.words(28);

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState(10); // Set to any initial countdown time

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer); // Clean up timer on component unmount
    }
  }, [timeLeft]);

  return (
    <div className="text-center">
      <CountDownWords fakeWords={fakeWords} />
      <CountDownTimer timeLeft={timeLeft} />
    </div>
  );
}

// Countdown words component
function CountDownWords({ fakeWords }: { fakeWords: string }) {
  return <div className="text-4xl text-center text-slate-600">{fakeWords}</div>;
}

// Countdown timer component
function CountDownTimer({ timeLeft } : {timeLeft: number}) {
  return <div className="font-medium text-yellow-500">Time: {timeLeft}</div>;
}

export default App;
