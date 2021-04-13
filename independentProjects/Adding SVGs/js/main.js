/*
Adding SVGs to the screen
*/

//canvas area 500x400
const svg = d3.select("#chart-area").append("svg")
.attr("width", 500)
.attr("height", 400)

//Circle SVG 
svg.append("circle")
.attr("cx", 250)
.attr("cy",200)
.attr("r",100)
.attr("fill", "pink")

//Ellipse SVG
svg.append('ellipse')
.attr("cx", 145)
.attr("cy",25)
.attr("rx",25)
.attr("ry",15)
.attr("fill", "gray")
