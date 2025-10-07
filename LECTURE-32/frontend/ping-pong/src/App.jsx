import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  // useEffect   -> it is a hook which is used to do side-effect(third party work) in react

  let [ws, setWs] = useState(null);     // useState is to create state variable. State varibale is variable which is dynamic

  let inputRef=useRef()    // useRef is used to store any dom element refrence and it is different from useState because it does not trigger re-rendering of a component
  useEffect(() => {
    let socket = new WebSocket("ws://localhost:8080");
    socket.onmessage = (event) => {
      console.log("Message from server:", event.data);
    };

    setWs(socket);
  }, [])

  function sendMessage() {
    let message = inputRef.current.value;
    ws.send(message);
    inputRef.current.value="empty";
  }

  return (
    <>
      <h1>ping-pong</h1>
      <input ref={inputRef} type="text" />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
