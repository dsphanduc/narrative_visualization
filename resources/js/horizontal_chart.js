// Set up the SVG dimensions
 const svgWidth = 800;
 const svgHeight = 400;
 const margin = { top: 20, right: 20, bottom: 30, left: 40 };
 const width = svgWidth - margin.left - margin.right;
 const height = svgHeight - margin.top - margin.bottom;

// Create the SVG element
const svg = d3.select("#chart").html("")
.append("svg")
.append("g")
.attr("width", svgWidth)
.attr("height", svgHeight)
.attr("transform", `translate(${margin.left}, ${margin.top})`);

let xScale = d3.scaleBand()
    .range([margin, width - 30])
    .padding(0.2);
let yScale = d3.scaleLinear()
    .range([height - margin, 0]);

// appending X axis
let xAxis = svg.append("g")
    .attr("transform", "translate(0, " + (height - margin) + ")")
    .call(d3.axisBottom(xScale))

//appending Y axis
let yAxis = svg.append("g")
    .attr("transform", "translate(" + margin + ",0)")