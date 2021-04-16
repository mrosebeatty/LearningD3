/*
Adding SVGs to the screen, I made a robot, with two arms for lines , circle body , circle head, and square neck. 
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
.attr("cx", 245)
.attr("cy",25)
.attr("rx",25)
.attr("ry",15)
.attr("fill", "pink")

//Rectangle SVG
svg.append('rect')
.attr("x",170)
.attr("y",45)
.attr("width",150)
.attr("height",50)
.attr("fill",'purple')

/* Line SVG - for line svg's you need a style component or else line will be invisibile*/
svg.append('line')
.style("stroke",'blue')
.style("stroke-width",10)
.attr("x1",50)
.attr("y1",150)
.attr("x2",150)
.attr("y2",200)

svg.append('line')
.style("stroke",'blue')
.style("stroke-width",10)
.attr("x1",350)
.attr("y1",200)
.attr("x2",450)
.attr("y2",150)




