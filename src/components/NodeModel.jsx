import { useImperativeHandle, useRef } from "react";

export default function NoteModel({ ref }) {
  const noteref = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        noteref.current.showModal();
      },
    };
  });
  return (
    <dialog ref={noteref} className="result-modal">
      <h2>Please Enter Your Name To Start</h2>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
