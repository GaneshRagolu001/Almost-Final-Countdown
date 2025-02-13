import { useRef } from "react";
import { useState } from "react";
import TimerChallenge from "./TimerChallenge";
export default function Player() {
  const myref = useRef();
  const [enterdName, setEnteredName] = useState("");

  function onSubmited() {
    setEnteredName(myref.current.value);
    myref.current.value = "";
  }

  return (
    <>
      <section id="player">
        {enterdName ? (
          <h2>Welcome {enterdName}</h2>
        ) : (
          <h2>Please Enter Your Name</h2>
        )}
        <p>
          <input type="text" ref={myref} />
          <button onClick={onSubmited}>Set Name</button>
        </p>
      </section>

      <div id="challenges">
        <TimerChallenge title={"Steady Starter"} targetTime={5} enterdName={enterdName}/>
        <TimerChallenge title={"Halfway Hustle"} targetTime={3.5} enterdName={enterdName}/>
        <TimerChallenge title={"Tricky Tweak"} targetTime={4.2} enterdName={enterdName}/>
        <TimerChallenge title={"Swift Strike"} targetTime={2.8} enterdName={enterdName}/>
        <TimerChallenge title={"Long Haul"} targetTime={6.3} enterdName={enterdName}/>
        <TimerChallenge title={"Lightning Reflex"} targetTime={1.7} enterdName={enterdName}/>
        <TimerChallenge title={"Deceptive Drift"} targetTime={3.9} enterdName={enterdName}/>
        <TimerChallenge title={"Split-Second Gamble"} targetTime={5.6} enterdName={enterdName}/>
      </div>
    </>
  );
}
