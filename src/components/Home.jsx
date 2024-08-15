import React, { useState } from "react";
import CountriesList from "./CountriesList";

function Home({ toggle, setToggle }) {
  const [query, setQuery] = useState("");

  return (
    <main className={`${toggle ? "bg-gray-900" : "bg-gray-200"}`}>
      {query === "unmount" ? (
        "Unmount"
      ) : (
        <CountriesList toggle={toggle} query={query} setQuery={setQuery} />
      )}
    </main>
  );
}

export default Home;
