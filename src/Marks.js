const Marks = ({
  binnedData,
  xScale,
  yScale,
  tooltipFormat,
  circleRadius,
  innerHeight,
}) =>
  binnedData.map((d) => (
    <rect
      className="mark"
      x={xScale(d.x0)}
      y={yScale(d.y)}
      r={circleRadius}
      width={xScale(d.x1) - xScale(d.x0)}
      height={innerHeight - yScale(d.y)}
    >
      <title>{tooltipFormat(d.y)}</title>
    </rect>
  ));

export default Marks;
