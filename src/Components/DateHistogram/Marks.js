const Marks = ({ binnedData, xScale, yScale, tooltipFormat, innerHeight }) =>
  binnedData.map((d) => (
    <rect
      key={xScale(d.x0) + yScale(d.y) + xScale(d.x1)}
      className="mark"
      x={xScale(d.x0)}
      y={yScale(d.y)}
      width={xScale(d.x1) - xScale(d.x0)}
      height={innerHeight - yScale(d.y)}
    >
      <title>{tooltipFormat(d.y)}</title>
    </rect>
  ));

export default Marks;
