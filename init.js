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



var frostlinesvg = ['M3.6,33.8c-0.3,0.1-0.8,0.1-1-0.2c-0.4-0.4-0.4-1,0-1.4c0.8-0.8,0.8-2,0.8-3.4c0-1.7-0.1-3.5,1.5-5   c0.8-0.8,1.7-1.3,2.6-1.7c0.8-0.4,1.5-0.8,2.1-1.3c1.1-1,1.9-2.3,2.3-3.7l0.1-0.3c0.4-1.6,0.8-3,2.1-4.5c0.8-0.9,2-1.4,3-1.9   c0.7-0.3,1.3-0.6,1.9-1c1.3-0.9,2.3-2,2.9-2.9c0.5-0.8,0.6-1.7,0.7-2.7c0.1-0.5,0.1-0.9,0.2-1.4l0-0.2c0.1-0.5,0.6-0.9,1.2-0.8   c0.5,0.1,0.9,0.6,0.8,1.2l0,0.2c-0.1,0.5-0.1,0.9-0.2,1.3c-0.1,1.1-0.3,2.3-1,3.5c-1,1.6-2.6,2.9-3.5,3.5c-0.7,0.5-1.5,0.8-2.2,1.2   c-0.9,0.4-1.8,0.8-2.4,1.5c-1,1.1-1.3,2.1-1.7,3.7l-0.1,0.3c-0.5,1.8-1.4,3.4-2.8,4.7c-0.8,0.7-1.6,1.2-2.5,1.6   c-0.8,0.4-1.6,0.8-2.1,1.4c-0.9,0.9-0.9,2.1-0.9,3.5c0,1.6,0.1,3.4-1.3,4.8C3.8,33.7,3.7,33.8,3.6,33.8z']

var legendfrostlinedata = [{"character": "Emily Gilmore", "color": "#009DDC"}, {"character": "Paris Gellar", "color": "#FF1B1C"}, {"character": "Lane Kim", "color": "#A9714B"}, {"character": "Mrs. Kim", "color": "#9055A2"}]



//Create the legend //

      var legendWidth = 900;

      
      

      var legendPopTarts = legend.append('g')
        .attr('transform', 'translate(' + legendWidth/ 8 + ',0)')
        .selectAll('g')
        .data(["HEIGHT OF POP-TART = KEVIN'S SCORE", "WIDTH OF POP-TART = DEMI'S SCORE"])
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



        legendPopTarts.append('text')
        .attr('y', 135)
        .attr('text-anchor', 'middle')
        .attr('fill', '#444')
        .style('font-size', '12px')
        .text(function(d) {return d});


 
var sprinklescolor = d3.scaleOrdinal(d3.schemeCategory10);

var frostcolors = ['#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e']

var frostscale;

// Draw sprinkles legends

var legendsprinkles = legend.append('g')
.attr('transform', 'translate(0,170)')
// .append('text')
//         .attr('y', 132)
//         .attr("width", legendWidth/2)
//     .attr("height", 100)
//     .attr("x", legendWidth* 0.75)
//         .attr('text-anchor', 'middle')
//         .attr('fill', '#444')
//         .style('font-size', '12px')
//         .text("ONE SPRINKLE = ONE POP CULTURAL REFERENCE");


for (var i = 0; i < 20; i++) {

      var x = Math.floor(Math.random() * 60) + 1;
      var y = Math.floor(Math.random() * 60) + 1;
      
      legendsprinkles.append('circle')
          .datum({'x': x, 'y': y})
          .attr('transform', 'translate(80,0)')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', 2)
          .style('stroke-width', 0.8)
          .style('stroke', "#333")
          .style('fill', sprinklescolor(i));
    }


    legendsprinkles.append('text')
    .attr('fill', '#444')
    .attr('y', 87)
    .attr("x", 0)
        .style('font-size', '12px')
        .text("ONE SPRINKLE = ONE POP CULTURAL REFERENCE");



  var legendFrostLine = legend.append('g')
        .attr('transform', 'translate(' + legendWidth/2.5 + ',110)')
        .selectAll('g')
        .data(legendfrostlinedata)
        .enter().append('g')
        .attr('transform', function(d, i) {
          var x = i * (poptartSize);
          return 'translate(' + [x, 0] + ')';
        });


    legendFrostLine.append('text')
        .attr('y', 115)
        .attr('text-anchor', 'middle')
        .attr('fill', '#444')
        .style('font-size', '12px')
        .text(function(d) {return d.character});


      legendFrostLine.append('path')
         .attr('transform', 'translate(0,172)')
         .attr('transform', 'scale(1.4)translate(0,35)')
        .attr('d', frostlinesvg)
        .style("stroke", '#444')
    .style('stroke-width', 0.5) 
        .attr('fill', function(d) {
          return d.color })


  var legendFrosttext = legend.append('text')
    .attr('transform', 'translate(' + legendWidth/2 + ',122)')
    .attr('fill', '#444')
    .attr('y', 133)
    .attr("x", 0)
        .style('font-size', '12px')
        .text("LINE OF FROST = CHARACTER APPEARANCE BY...");








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


frostscale = d3.scaleQuantize().domain([minimdb, maximdb]).range(frostcolors);

var xlegend = d3.scaleLinear()
    .domain([minimdb, maximdb])
    .range(frostcolors);


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
          return '' + d.episode +                         
        "<br/><div class='scores'>KEVIN SCORE: " + d.kevin_score + "<br>DEMI SCORE: " + d.demi_score + "<br>IMDB SCORE: " + d.imdb_score + '</div>'
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



        var emilyfrost =   svg.selectAll('svg')
        .data(data)
        .enter()
        .append('path')
        

        emilyfrost.attr('transform', function(d, i) {
          var x = (i % 5) * poptartSize * 1.25;
          var y = Math.floor(i / 5) * poptartSize * 1.7;
          var calibrate;
          var frostoffset;
           var offsetY;
          var scale = (d.kevin_score)/5.5

          if (d.kevin_score < 3) {
            calibrate = 220
            offsetY = d.demi_score * 1.85

          }
          
          else if (d.kevin_score >= 3 && d.kevin_score <= 4) {
            calibrate = 290
            offsetY = d.demi_score * 1.55

          }
          else if (d.kevin_score >= 5 ) {

            calibrate = 450
            offsetY = d.demi_score * 1.25

          }

          frostoffset = calibrate/d.kevin_score
          var offsetX = (frostoffset - [d.kevin_score * 7])/scale 
         
          return 'translate(' + [x, y] +
            ')scale(' + scale + ')translate(' + [offsetY, offsetX/2 ] + ')';
        })
        .style("stroke", '#444')
        .classed('emilyfrost', true)       
    .style("fill", "#009DDC")
    .style('stroke-width', 0.5)  
    .style("opacity", 1)
    .attr('d', function(d, i) {
          if (d.emily == 'Y') {
           return frostlinesvg

          }
          else {
            return '';
          }
        })


    var parisfrost =   svg.selectAll('svg')
        .data(data)
        .enter()
        .append('path')
        

        parisfrost.attr('transform', function(d, i) {
          var x = (i % 5) * poptartSize * 1.25;
          var y = Math.floor(i / 5) * poptartSize * 1.7;
          var calibrate;
          var frostoffset;
           var offsetY;
          var scale = (d.kevin_score)/5.5
          
          if (d.kevin_score > 0 && d.kevin_score <= 4) {
            calibrate = 320
            offsetY = d.demi_score * 3.25

          }
          else if (d.kevin_score >= 5 && d.kevin_score <= 8) {

            calibrate = 500
            offsetY = d.demi_score * 2.25

          }

           else {

            calibrate = 640
            offsetY = d.demi_score * 2.25

          }

          frostoffset = calibrate/d.kevin_score
          var offsetX = (frostoffset - [d.kevin_score * 7])/scale 
         
          return 'translate(' + [x, y] +
            ')scale(' + scale + ')translate(' + [offsetY, offsetX/2 ] + ')';
        })
        .style("stroke", '#444')
        .classed('parisfrost', true)       
    .style("fill", "#FF1B1C")
    .style('stroke-width', 0.5)  
    .style("opacity", 1)
    .attr('d', function(d, i) {
          if (d.paris == 'Y') {
           return frostlinesvg

          }
          else {
            return '';
          }
        })


    var lanefrost =   svg.selectAll('svg')
        .data(data)
        .enter()
        .append('path')

    lanefrost.attr('transform', function(d, i) {
          var x = (i % 5) * poptartSize * 1.25;
          var y = Math.floor(i / 5) * poptartSize * 1.7;
          var calibrate;
          var frostoffset;
           var offsetY;
          var scale = (d.kevin_score)/5.5
          
          if (d.kevin_score > 0 && d.kevin_score <= 4) {
            calibrate = 330
            offsetY = d.demi_score * 4.25

          }
          else if (d.kevin_score == 5 ) {

            calibrate = 500
            offsetY = d.demi_score * 3.45

          }
          else if (d.kevin_score > 5  && d.kevin_score <= 7) {

            calibrate = 570
            offsetY = d.demi_score * 3.45

          }

          else if (d.kevin_score > 7  && d.kevin_score <= 8) {

            calibrate = 690
            offsetY = d.demi_score * 3.45

          }

          else {

            calibrate = 890
            offsetY = d.demi_score * 3.05

          }
          frostoffset = calibrate/d.kevin_score
          var offsetX = (frostoffset - [d.kevin_score * 7])/scale 
         
          return 'translate(' + [x, y] +
            ')scale(' + scale + ')translate(' + [offsetY, offsetX/2 ] + ')';
        })
        .style("stroke", '#444')
        .classed('lanefrost', true)       
    .style("fill", "#A9714B")
    .style('stroke-width', 0.5)  
    .style("opacity", 1)
    .attr('d', function(d, i) {
          if (d.lane == 'Y') {
           return frostlinesvg

          }
          else {
            return '';
          }
        })


     var mrskimfrost =   svg.selectAll('svg')
        .data(data)
        .enter()
        .append('path')

    mrskimfrost.attr('transform', function(d, i) {
          var x = (i % 5) * poptartSize * 1.25;
          var y = Math.floor(i / 5) * poptartSize * 1.7;
          var calibrate;
          var frostoffset;
           var offsetY;
          var scale = (d.kevin_score)/5.5
          
          if (d.kevin_score > 0 && d.kevin_score <= 4) {
            calibrate = 390
            offsetY = d.demi_score * 5.25

          }
          else if (d.kevin_score == 5 ) {

            calibrate = 600
            offsetY = d.demi_score * 4.45

          }
          else if (d.kevin_score > 5 && d.kevin_score <= 8) {

            calibrate = 770
            offsetY = d.demi_score * 4.45

          }
          else if (d.kevin_score > 8 && d.kevin_score <= 10) {

            calibrate = 970
            offsetY = d.demi_score * 4.45

          }

           if (d.demi_score < d.kevin_score && [d.kevin_score - d.demi_score] >= 2) {
            calibrate = 660
            offsetY = d.demi_score * 2
            

          }

          frostoffset = calibrate/d.kevin_score
          var offsetX = (frostoffset - [d.kevin_score * 7])/scale 
         
          return 'translate(' + [x, y] +
            ')scale(' + scale + ')translate(' + [offsetY, offsetX/2 ] + ')';
        })
        .style("stroke", '#444')
        .classed('mrskimfrost', true)       
    .style("fill", "#9055A2")
    .style('stroke-width', 0.5)  
    .style("opacity", 1)
    .attr('d', function(d, i) {
          if (d.mrskim == 'Y') {
           return frostlinesvg

          }
          else {
            return '';
          }
        })




        var frostcolorslegend = legend.append("foreignObject")
    .attr("width", legendWidth/2)
    .attr("height", 100)
    .attr("x", legendWidth/2)
    .attr("y", poptartSize/2.5)
  .append("xhtml:ul")
    .attr('class', 'list-inline')


    var numberFormat = d3.format(".2")
    


var keys = frostcolorslegend.selectAll('li.key')
    .data(frostscale.range());

keys.enter().append('li')
    .attr('class', 'key')
    .style('border-top-color', String)
    .text(function(d) {
        var r = frostscale.invertExtent(d);
        return numberFormat(r[0]);
    });


    legend.append('text')
        .attr('y', 132)
        .attr("width", legendWidth/2)
    .attr("height", 100)
    .attr("x", legendWidth* 0.75)
        .attr('text-anchor', 'middle')
        .attr('fill', '#444')
        .style('font-size', '12px')
        .text("FROST COLOR = IMDB RATING");

 

        

        


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

