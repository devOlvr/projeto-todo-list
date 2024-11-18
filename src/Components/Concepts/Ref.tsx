import { FormEvent, useRef } from "react";

export const Refs = () => {
  const inputNameRef = useRef<HTMLInputElement>(null); //
  const inputEmailRef = useRef<HTMLInputElement>(null); //
  const inputPasswordRef = useRef<HTMLInputElement>(null); // { current: null } querySelector

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
  }

  // useEffect(() => {
  //   console.log(inputNameRef);
  // }, [inputNameRef]);

  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <h1>useRef</h1>

      <br />
      <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputPasswordRef} />

      <br />
      <button type="submit">Submeter</button>
    </form>
  );
};
