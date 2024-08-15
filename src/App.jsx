import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

const body = document.getElementsByTagName("body");

export default function App() {
  const [toggle, setToggle] = useState(false);

  if (toggle) {
    document.body.style.backgroundColor = `rgb(3 7 18)`;
  } else {
    document.body.style.backgroundColor = `rgb(107 114 128)`;
  }

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <Outlet context={[toggle, setToggle]} />
    </>
  );
}
