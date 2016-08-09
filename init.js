var poptartdata;
var strokeColor = '#444';
    var flowerSize = 150;
    var padding = 20;
    var legend = d3.select('.header svg')


    var svg = d3.select('#poptarts svg')
    	.style('left', flowerSize + 'px')
    	.append('g')
    	.attr('transform', 'translate(' + [padding, padding] + ')');
   

    var years = d3.select('.years');
    var titles = d3.select('.titles')
    	.style('left', flowerSize + 'px')
    	.style('padding', padding + 'px');

 
var sprinklescolor = d3.scaleOrdinal(d3.schemeCategory10);

var frostscale;


function drawDensityCircle(d,i){
	var parent = d3.select(this);
	

	 for (var i = 0; i < 20; i++) {


      var x = Math.floor(Math.random() * (parseInt(d.kevin_score) * 6.5)) + 1;
      var y = Math.floor(Math.random() * (parseInt(d.demi_score) * 6.5)) + 1;
      
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

	poptartdata = data;





 var poptart = svg.selectAll('svg')
        .data(data)
        .enter()
        .append("rect")
        .classed('poptart', true)
        .attr("width", function(d) {
                return parseInt(d.kevin_score) * 10;
            })
        .attr("height", function(d) {
                return parseInt(d.demi_score) * 10;
            })
        .attr('transform', function(d, i) {
          var x = (i % 5) * flowerSize * 1.25;
          var y = Math.floor(i / 5) * flowerSize * 1.2;
          return 'translate(' + [x, y] +
            ')rotate(-55, 45, 30)';
        })
        .style("stroke", '#402313')
        .style("opacity", 0.7)
        .style("fill", '#BF8C60')
        .style("stroke-width", 2)



        var frost =   svg.selectAll('svg')
        .data(data)
        .enter()
        .append("rect")
        .classed('frost', true)       // attach a polygon to the svg
    .style("stroke", "#444")
    .style("stroke-width", 1)  // colour the line
    .style("fill", "#FFF")
    .attr('transform', function(d, i) {
          var x = (i % 5) * flowerSize * 1.25;
          var y = Math.floor(i / 5) * flowerSize * 1.2;
          return 'translate(' + [x, y] +
            ')rotate(-55, 45, 30)';
        })
    .attr("x", function(d) {
                return [(parseInt(d.kevin_score) * 10) - (parseInt(d.kevin_score) * 7)]/2;
            })
     .attr("y", function(d) {
                return [(parseInt(d.demi_score) * 10) - (parseInt(d.demi_score) * 7)]/2;
            })
    .attr("width", function(d) {
                return parseInt(d.kevin_score) * 7;
            })
        .attr("height", function(d) {
                return parseInt(d.demi_score) * 7;
            })

 

        

        


      var sprinkles =   svg.selectAll('svg')
        .data(data)
        .enter()
        .append("g")
      .attr('transform', function(d, i) {
          var x = (i % 5) * flowerSize * 1.25;
          var y = Math.floor(i / 5) * flowerSize * 1.2;
          var test = [(parseInt(d.kevin_score) * 10) - (parseInt(d.kevin_score) * 7)]/2
          var test2 = [(parseInt(d.demi_score) * 10) - (parseInt(d.demi_score) * 7)]/2
          console.log(test2)
          return 'translate(' + [x + test , y - test ] +
            ')rotate(-55,54, 25)';
        })
        .each(drawDensityCircle);



       


        });