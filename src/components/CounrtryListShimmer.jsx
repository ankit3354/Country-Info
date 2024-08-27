import React from "react";
import ShimmerCardList from "./ShimmerCardList";

function CounrtryListShimmer() {
  return (
    <div className="ShimmerEffect-container max-w-screen-lg lg:mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-6 max-h-fit pb-10 place-items-center">
      {Array.from({ length: 10 }).map((shimmer, i) => {
        return <ShimmerCardList key={i} />;
      })}
    </div>
  );
}

export default CounrtryListShimmer;
