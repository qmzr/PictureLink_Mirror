import { useEffect, useRef } from "react";
import {
  axisBottom,
  axisLeft,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select,
  extent,
  schemeCategory10
} from "d3";

import Data from '../../response.json'

function AxisBottom({ scale, transform }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

function AxisLeft({ scale }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} />;
}

function Bars({ data, height, scaleX, scaleY }) {
  const colors  = schemeCategory10

  console.log(colors, 'colorscolors')
  return (
    <>
      {data.map(({ value, label }, index) => (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill="teal"

          {
           ...(index === 0) && { fill: '#1BAA76'}
          }

          {
            ...(index > 0) && { fill: colors[index]}
          }
        />
      ))}
    </>
  );
}

export function BarChart() {
  const data = Data.top_10_classes.map(top10 => ({
    label: `Class ${top10.class_number}`,
    value: top10.score,
  }))
  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const width = 570 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain(extent(data.map(d => d.value)))
    .range([height, 0]);

    console.log(data, extent(data.map(d => d.value)), 'extentextentextent')

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
      </g>
    </svg>
  );
}
