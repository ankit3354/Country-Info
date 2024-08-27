import React, { useEffect, useState } from "react";
import Countrycard from "./Countrycard";
import { useOutletContext } from "react-router-dom";
import { RiEmotionSadLine } from "react-icons/ri";
import Input from "./Input";
import SelectionRegion from "./SelectionRegion";
import CounrtryListShimmer from "./CounrtryListShimmer";

function CountriesList({ query, setQuery }) {
  const [country, setCountry] = useState([]);
  const [toggle, setToggle] = useOutletContext();
  const [NotFound, setNotFound] = useState(false);
  const [filteredByRegion, setFilterdByRegion] = useState([]);
  const [region, setRegion] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);

        const uniqueRegion = Array.from(
          new Set(data.map((country) => country.region))
        ).map((region) => ({
          value: region,
          label: region,
        }));
        setRegion(uniqueRegion);
      })
      .catch(() => {
        setNotFound(true);
      });
  }, []);

  if (NotFound)
    return (
      <div className="flex text-5xl items-center justify-center min-h-screen">
        Any Country Not Found <RiEmotionSadLine />
      </div>
    );

  return (
    <section
      className={`countryCard_Section ${
        toggle ? "bg-gray-900" : "bg-gray-200"
      } h-fit `}
    >
      <div
        className={`flex ${
          toggle ? "bg-gray-900" : "bg-gray-200"
        } items-center flex-wrap max-w-screen-lg justify-between gap-5 py-8 sm:py-10 mx-5 sm:mx-10 lg:mx-auto`}
      >
        <Input setQuery={setQuery} />
        <SelectionRegion
          region={region}
          setRegion={setRegion}
          country={country}
          setFilterdByRegion={setFilterdByRegion}
        />
      </div>
      {!country.length ? (
        <CounrtryListShimmer />
      ) : (
        <div className="Country_Container max-w-screen-lg lg:mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-6 min-h-full pb-10 place-items-center">
          {filteredByRegion &&
            filteredByRegion
              .filter((countries) =>
                countries.name.common
                  .toLowerCase()
                  .includes(query.toLowerCase())
              )
              .map((item) => (
                <Countrycard
                  key={item.name.common}
                  region={item.region}
                  capital={item.capital}
                  flag={item.flags.svg}
                  population={item.population.toLocaleString("en-IN")}
                  name={item.name.common}
                  toggle={toggle}
                />
              ))}
        </div>
      )}
    </section>
  );
}

export default CountriesList;
