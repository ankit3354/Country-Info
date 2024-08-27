import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <Outlet context={[toggle, setToggle]} />
    </>
  );
}
