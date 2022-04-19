import React, { useState } from "react";
import useData from "./hooks/useData";
import BubbleMap from "./Components/BubbleMap/BubbleMap";
import DateHistogram from "./Components/DateHistogram/DateHistogram";
import useWorldAtlas from "./hooks/useWorldAtlas";

const height = 960;
const width = 1000;

const dateHistogramSize = 0.2;

const App = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();
  const [brushExtent, setBrushExtent] = useState();

  const xValue = (d) => d["Reported Date"];

  if (!data || !worldAtlas) {
    return <pre>Loading...</pre>;
  }

  console.log(brushExtent);
  const filteredData = brushExtent
    ? data.filter((d) => {
        const date = xValue(d);
        return date > brushExtent[0] && date < brushExtent[1];
      })
    : data;

  return (
    <svg width={width} height={height}>
      <BubbleMap
        data={data}
        filteredData={filteredData}
        worldAtlas={worldAtlas}
      />

      <g
        transform={`translate(0, ${height - dateHistogramSize * height - 320})`}
      >
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
          setBrushExtent={setBrushExtent}
          xValue={xValue}
        />
      </g>
    </svg>
  );
};

export default App;
