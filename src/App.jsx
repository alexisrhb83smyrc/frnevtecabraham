
import "./style.css";
import { useState, useEffect } from "react";
import { Form } from "./Form";
import { Info } from "./Info";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form />
    <Info />
    </>
  )
}

export default App
