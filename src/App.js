import { useState, useEffect } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Verification from "./Components/Verification";

function App() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);

  let content = null;

  if (show) {
    content = <Home />;
  } else {
    content = login ? (
      <Login show={setShow} login={setLogin} />
    ) : (
      <Register login={setLogin} />
    );
  }

  return <div className="App">{content}</div>;
}

export default App;
