import { useState } from "react";
import { useMachine } from "@xstate/react";
import { page_machine } from "machines/pages";

export default function Home() {
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);
  const [state, send] = useMachine(page_machine);
  const handleOne = () => send({ type: "go_one", flat: Boolean(name) });
  const handleTwo = () => send({ type: "go_two", flat: Boolean(check) });
  const handleInput = (e) => {
    console.log(name);
    setName(e.currentTarget.value);
  };
  const handleCheck = () => {
    console.log(check);
    setCheck(!check);
  };
  return (
    <div>
      <div>
        <label htmlFor="name">
          Digite nombre
          <input type="text" name="field" value={name} onChange={handleInput} />
          <button onClick={handleOne}>Option one {state.value}</button>
        </label>
      </div>
      <div>
        <label htmlFor="check">
          Terminos y condiciones
          <input
            type="checkbox"
            name="check"
            value={check}
            onChange={handleCheck}
          />
          <button onClick={handleTwo}>Option two {state.value}</button>
        </label>
      </div>
    </div>
  );
}
