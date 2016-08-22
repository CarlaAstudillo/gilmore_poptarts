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
          return '<b>' + d.episode +                          // closing </a> tag
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
          var test = [(d.kevin_score * 10) - (d.kevin_score * 7)]/2
          var test2 = [(d.demi_score * 10) - (d.demi_score * 7)]/2
          console.log(test2)
          return 'translate(' + [x + test , y - test ] +
            ')rotate(-55,54, 25)';
        })
        .each(drawRandomSprinkles);



       


        });