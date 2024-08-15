import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { RiEmotionSadLine } from "react-icons/ri";

import { GoArrowLeft } from "react-icons/go";

function Country() {
  const [countryDetail, setCountryDetail] = useState(null);
  const Params = useParams();
  const [toggle, setToggle] = useOutletContext();
  const [notFound, setNotFound] = useState(false);

  const CountryName = Params.Country;

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${CountryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryDetail({
          Name: data.name.common,
          region: data.region,
          subregion: data.subregion,
          flag: data.flags.svg,
          population: data.population.toLocaleString("en-IN"),
          capital: data.capital,
          languages: Object.values(data.languages)[0],
          nativeName: Object.values(data.name.nativeName)[0].common,
          currencyName: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          borders: [],
        });

        if (!data.borders) {
          data.borders = [];
        }

        Promise.all(
          data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([border]) => border.name.common);
          })
        ).then((borders) => {
          setCountryDetail((prevState) => ({ ...prevState, borders }));
        });
      })
      .catch((error) => {
        console.log(error);
        setNotFound(true);
      });
  }, [CountryName]);

  if (notFound) {
    return (
      <div className="flex text-5xl items-center justify-center min-h-screen">
        Country Not Found <RiEmotionSadLine />
      </div>
    );
  }

  return countryDetail === "null" ? (
    "Loading...."
  ) : (
    <div
      className={`flex  flex-col gap-10 flex-wrap items-center pt-24 w-full h-screen ${
        toggle ? "bg-gray-950" : "bg-slate-300"
      }  `}
    >
      <div onClick={() => history.back()} className={`w-full max-w-5xl  `}>
        <button
          className={`flex gap-1 items-center px-4 py-3 rounded-md  cursor-pointer ${
            toggle ? "bg-gray-200" : "bg-slate-100"
          } `}
        >
          <GoArrowLeft /> Back
        </button>
      </div>
      <div className="flex items-center justify-evenly flex-wrap w-full ">
        <img
          src={countryDetail?.flag}
          alt={`${countryDetail?.Name} flag`}
          className="w-96 rounded-md border-2 border-gray-300"
        />
        <ul className={`${toggle ? "text-gray-200" : "text-gray-900"}`}>
          <li className="text-5xl ">{countryDetail?.Name}</li>
          <li className="text-xl ">
            Region : <span> {countryDetail?.region} </span>
          </li>
          <li className="text-xl ">
            Sub region : <span> {countryDetail?.subregion} </span>
          </li>
          <li className="text-xl ">
            Capital : <span> {countryDetail?.capital} </span>
          </li>
          <li className="text-xl ">
            Language : <span> {countryDetail?.languages} </span>
          </li>
          <li className="text-xl ">
            Popularity : <span> {countryDetail?.population} </span>
          </li>
          <li className="text-xl ">
            NativeName : <span> {countryDetail?.nativeName} </span>
          </li>
          <li className="text-xl ">
            Currency : <span> {countryDetail?.currencyName} </span>
          </li>

          {countryDetail && countryDetail.borders.length !== 0 && (
            <li className="text-xl">
              <b>Border Countries: </b>&nbsp;
              <span>
                {countryDetail?.borders.map((border, i) => (
                  <Link
                    key={i}
                    to={`/${border}`}
                    className="border-2 border-gray-700 text-[12px] rounded-md p-1 mx-1 "
                  >
                    {border}
                  </Link>
                ))}
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Country;
