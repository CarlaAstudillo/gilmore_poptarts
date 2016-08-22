var strokeColor = '#444';
    var poptartSize = 150;
    var padding = 20;
    var legend = d3.select('.header svg')


    var svg = d3.select('#poptarts svg')
    	.style('left', 0 + 'px')
    	.append('g')
    	.attr('transform', 'translate(' + [padding, padding] + ')');
   

    var years = d3.select('.years');
    var titles = d3.select('.titles')
    	.style('left', poptartSize + 'px')
    	.style('padding', padding + 'px');



//Create the legend //

      var legendWidth = 900;

      
      

      var legendPopTarts = legend.append('g')
        .attr('transform', 'translate(' + legendWidth/ 8 + ',0)')
        .selectAll('g')
        .data(["HEIGHT OF POP-TART = KEVIN'S SCORE ", "WIDTH OF POP-TART = DEMI'S SCORE"])
        .enter().append('g')
        .attr('transform', function(d, i) {
          var x = i * (poptartSize * 1.6);
          return 'translate(' + [x, 0] + ')';
        });

        legendPopTarts.append("rect")
        .classed('poptartlegend', true)
        .attr("width", 70)
        .attr("height", 70)
        .attr('transform', function(d, i) {
          var x = (i % 2) - 70/2;
          var y = 27;
          return 'translate(' + [x, y] +
            ')rotate(-55, 45, 30)';
        })
        .style("stroke", '#444')
        .style("opacity", 0.7)
        .style("fill", 'none')
        .style("stroke-width", 2)

        legendPopTarts.append("rect")
        .classed('frostlegend', true)       
    .style("stroke", "#444")
    .style("stroke-width", 1)  
    .style("fill", "none")
    .style("opacity", 0.9)
    .attr('transform', function(d, i) {
          var x = (i % 2) - 70/2;
          var y = 27;
          return 'translate(' + [x, y] +
            ')rotate(-55, 45, 30)';
        })
    .attr("x", 10)
     .attr("y", 10)
    .attr("width", 50)
        .attr("height", 50)


        legendPopTarts.append("svg:image")
    .attr("xlink:href", "ruler.svg")
    .attr('transform', function(d, i) {
          var x = (i % 2) - 130/2;
          var y = 27;
          return 'translate(' + [x, y] +
            ')';
        })
    .attr('transform', function(d, i) {
          if (i == 1){
            return 'rotate(260, 45, 26)'

            }
            else{
          return 'rotate(-190, 6, 25)';
          }
        })
    .attr("width", 130)
    .attr("height", 85)
    .attr("x", -20)
    .attr("y",-15);


//         d3.xml("ruler.svg", "image/svg+xml", function(xml) {
  
// });

        legendPopTarts.append('text')
        .attr('y', 135)
        .attr('text-anchor', 'middle')
        .attr('fill', '#444')
        .style('font-size', '12px')
        .text(function(d) {return d});

 
var sprinklescolor = d3.scaleOrdinal(d3.schemeCategory10);

var frostcolors = ['#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e']


// Draw frost line to rep fave characters
// Draw legends



function drawRandomSprinkles(d,i){
	var parent = d3.select(this);
	

	 for (var i = 0; i < d.pop_ref; i++) {


      var x = Math.floor(Math.random() * d.kevin_score * 6.5) + 1;
      var y = Math.floor(Math.random() * d.demi_score * 6.5) + 1;
      
      parent.append('circle')
      		.datum({'x': x, 'y': y})
      		.attr('cx', x)
      		.attr('cy', y)
      		.attr('r', 2)
      		.style('stroke-width', 0.8)
      		.style('stroke', "#333")
      		.style('fill', sprinklescolor(i));
    }

	
}

d3.json("gilmore_episodes.json", function(data) {

var minimdb = d3.min(data, function(d) { return d.imdb_score; })

var maximdb = d3.max(data, function(d) { return d.imdb_score; })


var frostscale = d3.scaleQuantize().domain([minimdb, maximdb]).range(frostcolors);


 var poptart = svg.selectAll('svg')
        .data(data)
        .enter()
        .append("rect")
        .classed('poptart', true)
        .attr("width", function(d) {
                return d.kevin_score * 10;
            })
        .attr("height", function(d) {
                return d.demi_score * 10;
            })
        .attr('transform', function(d, i) {
          var x = (i % 5) * poptartSize * 1.25;
          var y = Math.floor(i / 5) * poptartSize * 1.7;
          return 'translate(' + [x, y] +
            ')rotate(-55, 45, 30)';
        })
        .style("stroke", '#402313')
        .style("opacity", 0.7)
        .style("fill", '#BF8C60')
        .style("stroke-width", 2)



        titles.selectAll('.title')
        .data(data)
        .enter().append('div')
        .classed('title', true)
        .style('position', 'absolute')
        .style('padding', '0 ' + padding + 'px')
        .style('width', poptartSize * 1.37 - padding + 'px')
        .style('left', function(d, i) {
          return (i % 5) * poptartSize * 1.23 + 'px';
        }).style('top', function(d, i) {
          return Math.floor(i / 5) * poptartSize * 1.7 + (d.demi_score * 10) + 60 + 'px';
        }).html(function(d) {
          return '<b>' + d.episode +                         
        "</b><br/><div class='scores'>KEVIN SCORE: " + d.kevin_score + "<br>DEMI SCORE: " + d.demi_score + "<br>IMDB SCORE: " + d.imdb_score + '</div>'
        });



        var frost =   svg.selectAll('svg')
        .data(data)
        .enter()
        .append("rect")
        .classed('frost', true)       
    .style("stroke", "#444")
    .style("stroke-width", 1)  
    .style("fill", function(d) { return frostscale(d.imdb_score); })
    .style("opacity", 0.9)
    .attr('transform', function(d, i) {
          var x = (i % 5) * poptartSize * 1.25;
          var y = Math.floor(i / 5) * poptartSize * 1.7;
          return 'translate(' + [x, y] +
            ')rotate(-55, 45, 30)';
        })
    .attr("x", function(d) {
                return [(d.kevin_score * 10) - (d.kevin_score * 7)]/2;
            })
     .attr("y", function(d) {
                return [(d.demi_score * 10) - (d.demi_score * 7)]/2;
            })
    .attr("width", function(d) {
                return d.kevin_score * 7;
            })
        .attr("height", function(d) {
                return d.demi_score * 7;
            })

 

        

        


      var sprinkles =   svg.selectAll('svg')
        .data(data)
        .enter()
        .append("g")
      .attr('transform', function(d, i) {
          var x = (i % 5) * poptartSize * 1.25;
          var y = Math.floor(i / 5) * poptartSize * 1.7;
          var border = [(d.kevin_score * 10) - (d.kevin_score * 7)]/2
          return 'translate(' + [x + border , y - border ] +
            ')rotate(-55,54, 25)';
        })
        .each(drawRandomSprinkles);



       


        });