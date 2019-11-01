var svg = d3.select("body").append("svg")
          .attr("height","100%")
          .attr("width","100%")
d3.csv("NSFC01.csv",function(data){
    console.log(data);
})
var s={a:"ds",b:"sfa"};
console.log(s);