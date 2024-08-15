import React from "react";

function Input({ setQuery }) {
  return (
    <div className="overflow-hidden w-full sm:w-fit rounded-md border-2 border-gray-400">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        title="search..."
        placeholder="search country...."
        className="px-8 py-1 w-full outline-none rounded-md border-none text-xl"
      />
    </div>
  );
}

export default Input;
