import { useState } from "react";
import { useMachine } from "@xstate/react";
import { page_machine } from "machines/pages";
import { useMutation } from "react-query";
import { post_post } from "queries/posts";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);
  const [mutate] = useMutation(post_post);
  const [state, send] = useMachine(page_machine);

  if (state.value === "one") {
    history.push("/one");
  }

  const handleOne = () => {
    const value = {
      id: 1,
      title: name,
      body: "...",
      userId: 1,
    };
    mutate(value);
    send({ type: "go_one", flat: Boolean(name) });
  };
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
