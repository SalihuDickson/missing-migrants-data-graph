import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";
import { useMemo } from "react";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const Marks = ({
  worldAtlas: { interiors, land },
  data,
  sizeScale,
  sizeValue,
}) => (
  <g className="marks">
    {useMemo(
      () => (
        <>
          <path className="sphere" d={path({ type: "Sphere" })} />
          <path className="graticules" d={path(graticule())} />
          {land.features.map((feature, i) => (
            <path className="land" d={path(feature)} />
          ))}
          <path className="interiors" d={path(interiors)} />
        </>
      ),
      [path, graticule, land, interiors]
    )}
    {data.map((d, i) => {
      const [x, y] = projection(d.coords);
      return <circle cx={x} cy={y} r={sizeScale(sizeValue(d))} />;
    })}
  </g>
);

export default Marks;
