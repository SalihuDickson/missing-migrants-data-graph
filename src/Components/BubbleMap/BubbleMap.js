import React, { useMemo } from "react";
import Marks from "./Marks";
import { scaleSqrt, max } from "d3";

const sizeValue = (d) => d["Total Dead and Missing"];
const maxRadius = 29;

const BubbleMap = ({ data, filteredData, worldAtlas }) => {
  const sizeScale = useMemo(
    () =>
      scaleSqrt()
        .domain([0, max(data, sizeValue)])
        .range([0, maxRadius]),
    [data, sizeValue, maxRadius]
  );

  return (
    <Marks
      worldAtlas={worldAtlas}
      data={filteredData}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  );
};

export default BubbleMap;
