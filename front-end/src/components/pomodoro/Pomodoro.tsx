import { useState, useEffect } from 'react';
import { Pause, Play, StopCircle } from 'lucide-react';

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function checkButtonActive(e) {
    const buttons = document.querySelectorAll('.btn');
    const buttonClicked = e.currentTarget;
    buttons.forEach((btn) => {
      if (buttonClicked === btn) {
        buttons.forEach((a) => a.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  }

  const startTimer = (e) => {
    setIsRunning(true);
    checkButtonActive(e);
  };

  const pauseTimer = (e) => {
    setIsRunning(false);
    checkButtonActive(e);
  };

  const stopTimer = (e) => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
    checkButtonActive(e);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId!);
          setIsRunning(false);
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      if (intervalId) clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId); // Check if intervalId is not null before clearing
    };
  }, [isRunning, minutes, seconds]);

  return (
    <div className="min-w-[500px] h-[323px] bg-[#202123] rounded-xl flex flex-col justify-center gap-2 border border-[#2d2d2d]">
      <h1 className="text-center text-white font-bold text-xl">POMODORO</h1>
      <span className="text-center text-main text-6xl font-bold py-3">{`${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds}`}</span>
      <div className="w-full flex justify-center items-center gap-2">
        <button
          onClick={(e) => startTimer(e)}
          disabled={isRunning}
          className="flex justify-center items-center px-5 py-2 bg-black/50 hover:bg-black/20 text-white gap-2 rounded-xl font-bold"
        >
          <Play size={15} />
          START
        </button>
        <button
          onClick={(e) => pauseTimer(e)}
          disabled={!isRunning}
          className="flex justify-center items-center px-5 py-2 bg-black/50 hover:bg-black/20 text-white gap-2 rounded-xl font-bold"
        >
          <Pause size={15} />
          PAUSE
        </button>
        <button
          onClick={(e) => stopTimer(e)}
          disabled={!isRunning}
          className="flex justify-center items-center px-5 py-2 bg-black/50 hover:bg-black/20 text-white gap-2 rounded-xl font-bold  disabled:cursor-not-allowed"
        >
          <StopCircle size={15} />
          RESET
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
