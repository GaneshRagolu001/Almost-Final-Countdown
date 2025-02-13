import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";
import NoteModel from "./NodeModel.jsx";

let count = 0;
export default function TimerChallenge({ title, targetTime, enterdName }) {
  const timer = useRef();
  const dialogref = useRef();
  const noteref = useRef();
  const [RemainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timerisActive = RemainingTime > 0 && RemainingTime < targetTime * 1000;

  if (RemainingTime <= 0) {
    clearInterval(timer.current);
    dialogref.current.open();
  }
  function handleStart() {
    if (enterdName == "" && noteref.current) {
      noteref.current.open();
    } else {
      count = 1;
      timer.current = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 10);
      }, 10);
    }
  }
  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }
  function handleStop() {
    clearInterval(timer.current);
    dialogref.current.open();
  }
  return (
    <>
      <NoteModel ref={noteref} />
      <ResultModal
        ref={dialogref}
        targetTime={targetTime}
        result={RemainingTime <= 0 ? "Lost" : "Won"}
        RemainingTime={RemainingTime}
        onReset={handleReset}
        playername={enterdName}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p>
          Stop your timer before <strong>{targetTime}s</strong>
        </p>
        <p>
          {timerisActive
            ? "Timer is Running..."
            : count == 1
            ? "Timer is Stopped"
            : "Timer is Not Started"}
        </p>
        <button onClick={timerisActive ? handleStop : handleStart}>
          {timerisActive ? "Stop" : "Start"} Timer
        </button>
      </section>
    </>
  );
}
