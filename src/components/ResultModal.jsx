import { useImperativeHandle, useRef } from "react";

export default function ResultModal({
  ref,
  playername,
  targetTime,
  result,
  RemainingTime,
  onReset,
}) {
  const timeleft = (RemainingTime / 1000).toFixed(2);
  const score = Math.round((1 - RemainingTime / (targetTime * 1000)) * 100);
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>
        {playername} You {result}
      </h2>
      {RemainingTime > 0 ? (
        <h3 className="dialog-score">
          Your Score is <strong>{score}</strong>
        </h3>
      ) : (
        ""
      )}

      <p>
        Your Target Time was <strong>{targetTime}</strong> second
        {targetTime > 1 ? "s" : ""}
      </p>
      {RemainingTime > 0 ? (
        <p>
          You Stopped Timer with <strong>{timeleft} seconds</strong> left
        </p>
      ) : (
        <p>
          <strong>{timeleft} seconds</strong> left
        </p>
      )}

      <form method="dialog">
        <button onClick={onReset}>Reset</button>
      </form>
    </dialog>
  );
}
