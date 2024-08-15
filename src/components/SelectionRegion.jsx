import React, { useEffect, useState } from "react";
import Select from "react-select";

function SelectionRegion({ country, setFilterdByRegion, region }) {
  const [selectRegion, setSelectRegion] = useState(null);

  useEffect(() => {
    if (selectRegion) {
      console.log(selectRegion.value);
      const SelectedCountry = country.filter(
        (country) => country.region === selectRegion.value
      );
      setFilterdByRegion(SelectedCountry);
    } else {
      setFilterdByRegion(country);
    }
  }, [selectRegion, country]);

  return (
    <>
      <div className="text-xl w-full sm:w-fit">
        <Select
          options={region}
          value={selectRegion}
          onChange={setSelectRegion}
          placeholder="Search a region..."
          className="w-full"
        />
      </div>
    </>
  );
}

export default SelectionRegion;
