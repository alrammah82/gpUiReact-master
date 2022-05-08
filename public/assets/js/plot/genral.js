function salesOverMonths(){
    x = [];
    y=[];
 for(i=1 ; i<=12;i++){
  x.push(i);
  y.push(Math.floor( Math.random()*20 )+100);
 }  
 console.log(x); 
var trace1 = {
x:[1,2,3,4,5,6,7,8,9,10,11,12],
y:y,
type: 'scatter',

};

var data = [trace1];
var layout = {

title: ' المبيعات خلال اخر 12 شهر   ',
xaxis: {

    title: 'الشهور  ',
    range: [ 0.75, 12.25 ]

   


  },

  yaxis: {

    title: ' SR قيمة  المبيعات  ',

    showline: false

  },
  

};
Plotly.newPlot('salesOverMonths', data,layout,{scrollZoom: false });
}

function salesOverYears(){
    x = [];
    y=[];
 for(i=1 ; i<=4;i++){
  x.push(i);
  y.push(Math.floor( Math.random()*20 )+15000);
 }  
 console.log(x); 
var trace1 = {
x:x,
y:y,
type: 'scatter',
connectgaps: true

};

var data = [trace1];
var layout = {

title: ' المبيعات خلال السنوات   ',
xaxis: {

    title: 'السنة   ',

  },

  yaxis: {

    title: ' SR قيمة  المبيعات  ',


  },
  legend: {

     local:'ar',

    

  }

};
Plotly.newPlot('salesOverYears', data,layout);
}


function orderOverMonth(){
    var x1 = [];

    var x2 = [];
    
    var y1 = [];
    
    var y2 = [];
    
    for (var i = 1; i < 500; i++) 
    
    {
    
      k = Math.random();
    
      x1.push(k*5);
    
      x2.push(k*10);
    
      y1.push(k);
    
      y2.push(k*2);
    
    }
    
    var trace1 = {
    
      x: x1,
    
      y: y1,
    
      name: 'control',
    
      autobinx: false, 
    
      histnorm: "count", 
    
      marker: {
    
        color: "rgba(255, 100, 102, 0.7)", 
    
         line: {
    
          color:  "rgba(255, 100, 102, 1)", 
    
          width: 1
    
        }
    
      },  
    
      opacity: 0.5, 
    
      type: "histogram", 
    
      xbins: {
    
        end: 2.8, 
    
        size: 0.06, 
    
        start: .5
    
      }
    
    };
    
    var trace2 = {
    
      x: x2,
    
      y: y2, 
    
      autobinx: false, 
    
      marker: {
    
              color: "rgba(100, 200, 102, 0.7)",
    
               line: {
    
                color:  "rgba(100, 200, 102, 1)", 
    
                width: 1
    
        } 
    
           }, 
    
      name: "experimental", 
    
      opacity: 0.75, 
    
      type: "histogram", 
    
      xbins: { 
    
        end: 4, 
    
        size: 0.06, 
    
        start: -3.2
    
    
      }
    
    };
    
    var data = [trace1, trace2];
    
    var layout = {
    
      bargap: 0.05, 
    
      bargroupgap: 0.2, 
    
      barmode: "overlay", 
    
      title: "المبيعات الناجحة خلال 12 شهر ", 
    
      xaxis: {title: "Value"}, 
    
      yaxis: {title: "Count"}
    
    };   

Plotly.newPlot('orderOverMonth', data);
}
salesOverMonths();
salesOverYears();
orderOverMonth();
