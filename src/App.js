import React, { useEffect, useState } from "react";
import "./style.css";

function useWindowWidth() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  function onResize(evt) {
    setHeight(evt.target.innerHeight);
    setWidth(evt.target.innerWidth);
  }

  useEffect(() => {
    // Al inicio registrar un event listener

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }

  }, [])

  return { width, height };
}

function useInput(inputType, placeholder) {
  const [input, setInput] = useState();
  function onKeyDown(evt) {
    if(evt.key === 'a'){
      evt.preventDefault();
      return;
    }
    setInput(evt.target.value);
  }

  function onInput(evt) {
    setInput(evt.target.value);
  }

  useEffect(() => {
    console.log('Mount');
  }, [])

  return {
    type: inputType,
    onInput,
    onKeyDown,
    value: input,
    placeholder: placeholder
  }
}


export default function App() {
  const { width, height } = useWindowWidth();

  const input = useInput('text', 'Micampo');
  const input2 = useInput('number', 'Mi number');


  return <>
    <p>{height}x{width}</p>
    <input {...input} />
    <input {...input2} />
    <p>{input.value}</p>
    <p>{input2.value}</p>
  </>;
}
