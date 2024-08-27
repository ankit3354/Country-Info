import React, { useState } from "react";
import { Link } from "react-router-dom";

function Countrycard({ region, capital, flag, population, name, toggle }) {
  const [country, setCountry] = useState(null);

  return country === "null" ? (
    "Loading....."
  ) : (
    <Link
      to={`/${name}`}
      className={`card_wrapper overflow-hidden ${
        toggle ? "bg-gray-900" : "bg-zinc-200"
      } rounded-lg border-2 border-gray-400 w-72 sm:max-w-44 md:max-w-48 lg:max-w-60 drop-shadow-lg`}
    >
      <div className="card_list ">
        <div className="flex justify-center">
          <img
            src={flag}
            alt={`${name} flag`}
            className="w-full max-h-40 bg-cover object-cover"
          />
        </div>
        <ul className={`list items-center px-6 pb-8 pt-4`}>
          <li
            className={`text-3xl ${
              toggle ? "text-gray-100" : "text-gray-800"
            } mt-2 mb-3`}
          >
            {name}
          </li>
          <li className={`${toggle ? "text-gray-100" : "text-gray-600"}`}>
            Population: {population}{" "}
          </li>
          <li className={`${toggle ? "text-gray-100" : "text-gray-600"}`}>
            Region: {region}
          </li>
          <li className={`${toggle ? "text-gray-100" : "text-gray-600"}`}>
            Capital: {capital}
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default Countrycard;
