import { useEffect, useRef } from "react";
import {
 axisBottom,
 axisLeft,
 scaleBand,
 scaleLinear,
 select,
 extent,
 schemeCategory10
} from "d3";


import { observer } from "mobx-react-lite";
import {store} from "../../store.js"
import { Container } from "./BarChart.style.js";
function AxisBottom ({ scale, transform }) {
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


function Bars({ data, height, scaleX, scaleY, onClick }) {
  console.log(data, "This is data");
 const colors  = schemeCategory10

 return (
   <>
     {data?.map(({ value, label }, index) => (
       <rect
         key={`bar-${label}`}
         x={scaleX(label)}
         y={scaleY(value)}
         width={scaleX.bandwidth()}
         height={height - scaleY(value)}
         fill="teal"
         onClick={() => onClick(index)}


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


export const BarChart = observer(function ({onClick}) {
 const top_10_classes = store?.uploadResponse?.top_10_classes || []
 console.log(top_10_classes, "BARCHART: top_10_classes");
 console.log(store.uploadResponse?.top_10_prototypes , "BARCHART: These are the list of top 10 prototypes.")
 const labelAndValues = top_10_classes?.map(top10 => ({
   label: `Class ${top10.class_number}`,
   value: Math.round(top10.probability)
 }))


 const margin = { top: 10, right: 0, bottom: 20, left: 40 };
 const width = 570 - margin.left - margin.right;
 const height = 300 - margin.top - margin.bottom;

 const scaleX = scaleBand()
   .domain(labelAndValues?.map(({ label }) => label))
   .range([0, width])
   .padding(0.5);
 const scaleY = scaleLinear()
   .domain([0, Math.max(...labelAndValues?.map(({ value }) => value))])
   .range([height, 0]);


 return (
  <Container>
  { store.status === "loading" && (<img class="center-image" src="/images/Loading_icon.gif" alt="loading ......"/>)}
  { store.status === "complete" && (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
      <AxisLeft scale={scaleY} transform={`translate(0, ${height})`} />
      <Bars data={labelAndValues} height={height} scaleX={scaleX} scaleY={scaleY} onClick={onClick} />
    </g>
   </svg>
  )}
  </Container>
 );
})

