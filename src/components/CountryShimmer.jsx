import React from "react";

function CountryShimmer() {
  return (
    <div className="Container w-full">
      <div className="country-shimmer flex items-center justify-evenly  flex-wrap ">
        <div className="flag-image w-96 h-60 rounded-md bg-gray-500 drop-shadow-sm shadow-gray-500 shadow-sm"></div>

        <ul className="detail-container flex flex-col gap-2">
          <li className="detail-1 h-12 w-52 bg-gray-500 drop-shadow-sm shadow-gray-500 shadow-sm rounded-md"></li>
          <li className="detail-1 h-6 w-52 bg-gray-500 drop-shadow-sm shadow-gray-500 shadow-sm rounded-md"></li>
          <li className="detail-1 h-6 w-52 bg-gray-500  drop-shadow-sm shadow-gray-500 shadow-sm rounded-md">
            {" "}
          </li>
          <li className="detail-1 h-6 w-52 bg-gray-500  drop-shadow-sm shadow-gray-500 shadow-sm rounded-md"></li>
          <li className="detail-1 h-6 w-52 bg-gray-500  drop-shadow-sm shadow-gray-500 shadow-sm rounded-md"></li>
          <li className="detail-1 h-6 w-52 bg-gray-500  drop-shadow-sm shadow-gray-500 shadow-sm rounded-md"></li>
          <li className="detail-1 h-6 w-52 bg-gray-500  drop-shadow-sm shadow-gray-500 shadow-sm rounded-md"></li>
          <li className="detail-1 h-6 w-52 bg-gray-500  drop-shadow-sm shadow-gray-500 shadow-sm rounded-md"></li>
        </ul>
      </div>
    </div>
  );
}

export default CountryShimmer;
