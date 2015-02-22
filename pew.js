$(function () {

		
	// $.fn.waypoint.defaults = {
	//   context: window,
	//   continuous: true,
	//   enabled: true,
	//   horizontal: false,
	//   offset: '75%',
	//   triggerOnce: true
	// }
	
	// --------------------------------------- //
	// Start Highcharts
	// --------------------------------------- //
	
	// var default_highcharts = {
	// 	chart: {
	// 		animation: {
	// 			duration: 2000	
	// 		},
	// 		marginTop: 50,
	// 		marginBottom: 65,
	// 		marginLeft: 50
	// 	},
	// 	//colors: ['#EA9E2C', '#949D48', '#938857'],
	// 	colors: ['#E7A337', '#BC7E35', '#815729', '#716A60', '#928D7C', '#dfdccc'],
	// 	title: {
	// 		enabled: true,
	// 		text: '',
	// 		align: 'left',
	// 		style: {
	// 			color: '#ccc',
	// 			fontFamily: '"abril-text", Georgia, "Times New Roman", Times, serif',
	// 			fontSize: '2em',
	// 			fontStyle: 'italic'
	// 		}
	// 	},
	// 	subtitle: {
	// 		enabled: false,
	// 		text: '',
	// 		align: 'left',
	// 		style: {
	// 			color: '#727272',
	// 			fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
	// 			fontSize: '1.2em'
	// 		},
	// 		y: 40
	// 	},
	// 	xAxis: {
	// 		labels: {
	// 			style: {
	// 				fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif'	
	// 			}
	// 		}
	// 	},
	// 	yAxis: {
	// 		title: {
	// 			text: null
	// 		},
	// 		labels: {
	// 			style: {
	// 				fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif'	
	// 			}
	// 		}
	// 	},
	// 	tooltip: {
	// 		shared: true,
	// 		crosshairs: true,
	// 		useHTML: true,
	// 		borderColor: '#ccc'
	// 	},
	// 	exporting: {
	// 		enabled: false
	// 	},
	// 	credits: {
	// 		enabled: false
	// 	},
	// 	labels: {
	// 		items: {
	// 			style: {
	// 				fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif'	
	// 			}
	// 		}
	// 	},
	// 	legend: {
	// 		borderWidth: 0,
	// 		floating: true,
	// 		align: 'left',
	// 		x: 0,
	// 		y: 10,
	// 		itemStyle: {
	// 			fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
	// 			fontSize: '1.1em',
	// 			paddingRight: '20px',
	// 			float:'left'   
	// 		},
	// 		itemMarginTop: 0,
	// 		itemDistance: 20,
 //            symbolWidth: 40,
 //            symbolHeight: 15
	// 	},
	// 	plotOptions: {
	// 		series: {
	// 			dataLabels: {
	// 				style: {
	// 					fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif'	
	// 				}
	// 			}
	// 		}
	// 	}
	// };
	
	
    /* ----------------------------------------------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------------------------------- */
	
	
	
	/* ----------------------------------------------- */
	/* Chart 10A.1/2 - Social Networking Use, p. 237-8 ------ Chart 9 */
	/* ----------------------------------------------- */
	
	var social_networking_data = [{
			name: 'All Internet Users',
			data: [[Date.UTC(2005, 1, 1), 8],
			[Date.UTC(2006, 7, 1), 16],
			[Date.UTC(2008, 4, 1), 29],
			[Date.UTC(2009, 3, 1), 46],
			[Date.UTC(2010, 4, 1), 61],
			[Date.UTC(2011, 7, 1), 64],
			[Date.UTC(2012, 1, 1), 66],
			[Date.UTC(2012, 7, 1), 69],
			[Date.UTC(2012, 11, 1), 67],
			[Date.UTC(2013, 4, 1), 72],
			[Date.UTC(2013, 8, 1), 73]]
		},{
			name: '18-29',
			data: [[Date.UTC(2005, 1, 1), 9],
			[Date.UTC(2006, 7, 1), 49],
			[Date.UTC(2008, 4, 1), 67],
			[Date.UTC(2009, 3, 1), 76],
			[Date.UTC(2010, 4, 1), 86],
			[Date.UTC(2011, 7, 1), 87],
			[Date.UTC(2012, 1, 1), 86],
			[Date.UTC(2012, 7, 1), 92],
			[Date.UTC(2012, 11, 1), 83],
			[Date.UTC(2013, 4, 1), 89],
			[Date.UTC(2013, 8, 1), 90]]
		},{
			name: '30-49',
			data: [[Date.UTC(2005, 1, 1), 7],
			[Date.UTC(2006, 7, 1), 8],
			[Date.UTC(2008, 4, 1), 25],
			[Date.UTC(2009, 3, 1), 48],
			[Date.UTC(2010, 4, 1), 61],
			[Date.UTC(2011, 7, 1), 68],
			[Date.UTC(2012, 1, 1), 72],
			[Date.UTC(2012, 7, 1), 73],
			[Date.UTC(2012, 11, 1), 77],
			[Date.UTC(2013, 4, 1), 78],
			[Date.UTC(2013, 8, 1), 78]]
		},{
			name: '50-64',
			data: [
				[Date.UTC(2005, 1, 1), 6],
				[Date.UTC(2006, 7, 1), 4],
				[Date.UTC(2008, 4, 1), 11],
				[Date.UTC(2009, 3, 1), 24],
				[Date.UTC(2010, 4, 1), 47],
				[Date.UTC(2011, 7, 1), 49],
				[Date.UTC(2012, 1, 1), 50],
				[Date.UTC(2012, 7, 1), 57],
				[Date.UTC(2012, 11, 1), 52],
				[Date.UTC(2013, 4, 1), 60],
				[Date.UTC(2013, 8, 1), 65]
			]
		},{
			name: '65+',
			data: [
				[Date.UTC(2005, 1, 1), null],
				[Date.UTC(2006, 7, 1), 1],
				[Date.UTC(2008, 4, 1), 7],
				[Date.UTC(2009, 3, 1), 13],
				[Date.UTC(2010, 4, 1), 26],
				[Date.UTC(2011, 7, 1), 29],
				[Date.UTC(2012, 1, 1), 34],
				[Date.UTC(2012, 7, 1), 38],
				[Date.UTC(2012, 11, 1), 32],
				[Date.UTC(2013, 4, 1), 43],
				[Date.UTC(2013, 8, 1), 46]
			]
		}];
	
	// var social_networking = jQuery.extend(true, {}, default_highcharts, {
	// 	chart: {
	// 		type: "line",
	// 		animation: {
	// 			duration: 3000	
	// 		},
	// 		marginTop: 75
	// 	},
	// 	colors: ['#71C2B1', '#E7A337', '#BC7E35', '#815729', '#716A60'],
	// 	title: {
	// 		text: 'Use of Social Networking Sites by Age'
	// 	},
	// 	subtitle: {
	// 		text: 'Percent of internet users who use social networking sites'	
	// 	},
	// 	tooltip: {
	// 		formatter: function() {
	// 			var s = '<b>'+ Highcharts.dateFormat('%b %Y', this.x) + '</b><table class="tooltip">';
	// 			$.each(this.points, function(i, point) {
	// 				s += '<tr><td style="color:'+point.series.color+'">'+
	// 					point.series.name+':</td>'+
	// 					'<td style="text-align: right">'+
	// 					Highcharts.numberFormat(point.y, 0)+'%</td></tr>';
	// 			});
	// 			s += '</table>';
	// 			return s;
	// 		}
	// 	},
	// 	xAxis : {
	// 		type: 'datetime'
	// 	}, 
	// 	yAxis: {
	// 		labels: {
	// 			formatter: function(){ 
	// 				return this.value+'%';
	// 			}
	// 		},
	// 		max: 100,
	// 		min: 0
	// 	},
	// 	plotOptions: {
	// 		line: {
	// 			marker: {
	// 				symbol: 'circle',
	// 				enabled: false
	// 			},
	// 			dataLabels: {
	// 				enabled: true,
	// 				color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'grey',
	// 				formatter: function(){
	// 					if ( this.x == Date.UTC(2013, 10, 1) ) {
	// 						return this.y+'%';
	// 					}
	// 				}
	// 			}
	// 		}
	// 	},
	// 	series: [{
	// 		data: [0,0,0,0,0,0,0,0,0,0,0],
	// 		marker: { enabled: false }
	// 	}]
 //    });
	
	// $('#chart10A1').highcharts(social_networking);
	// var chart10A1 = $('#chart10A1').highcharts();
    
	// $("#chart10A1").waypoint( function(direction) {
	// 	chart10A1.series[0].remove();	
	// 	chart10A1.colorCounter = 0;
	// 	chart10A1.symbolCounter = 0;

	// 	chart10A1.addSeries(social_networking_data[0], false);
	// 	chart10A1.addSeries(social_networking_data[1], false);
	// 	chart10A1.addSeries(social_networking_data[2], false);
	// 	chart10A1.addSeries(social_networking_data[3], false);
	// 	chart10A1.addSeries(social_networking_data[4], false);
	// 	chart10A1.redraw();
		
		// Clear data
		//social_networking_data = null;
		//chart10A1 = null;
	//});

/*
Zing
*/

	//load data
var chartData={
	"type": "line",
	"background-color":"#fff",
	"title":{
		"text":"Use of Social Networking Sites by Age",
		color: "#727272",
	    backgroundColor:"#fff",
        fontFamily:"serif",
        fontWeight:"none",
        fontStyle: "italic",
        fontSize: "24",
        textAlign:"left",
        padding:5
	},
	"subtitle":{
		"text": 'Percent of internet users who use social networking sites',
		backgroundColor:"#fff",
        fontColor:"#2c3e50",
        fontWeight:"normal",
        fontFamily:"Helvetica",
        fontSize:14,
        padding:5,
        textAlign:"left"

	},
	"legend":{
        backgroundColor:"#fff",
        alpha:1,
        borderWidth:0,
        shadow:false,
        "layout":"1x5",
        "item":{
		"color":"#333",
		"font-size":11,
		"font-family":"sans-serif",
		"list-style-type":"circle"
      	},
      	"position":"100% 0",
    },

    "crosshairX":{
        "lineWidth":1,
        "line-color":"#003849",
        "marker":{
            "size":4,
            "type":"circle",
            "borderColor":"#fff",
            "borderWidth":1
        },
        "scale-label":{
            "visible": false,
            "font-color":"#ffffff",
            "background-color":"#003849",
            "padding":"5px 10px 5px 10px",
            "border-radius":"5px"
        },
        "plotLabel":{
            "multiple":false,
            "callout":false,
            "shadow":false,
            "height":"120px",
            "width":"150px",
            "padding":"5px 10px 5px 10px",
            "border-radius":"5px",
            "alpha":1,
            "headerText": "%k",
            "text":"<b>%plot-text:</b> <span>%node-value%</span>"
        }
    },
	//"crosshair-x":{},
    "source": {
    	padding:5,
        "text": "Source: http://www.pewresearch.org/next-america/"
    },
	"scale-x":{
		labels: social_networking_data[0].data[Date],
		transform:{
            type:"date"
        },
        guide:{
        	visible:false
    	},
	},
	"scale-y":{
		values:"0:100:25",
		format:"%v%",
		lineColor: "white",
		"guide":{
	        "line-width":"0"
	    }
	},
	// "tooltip":{
	//     "text":"%t: %v% (%k)",
	//     "background-color":"#fff",
	//     "border-color":"#333",
	//     "border-width":"1px",
	//     "border-radius":"4px",
	//     "font-color":"#333",
	//     "font-size": "14px",
	//     "padding":"10px"
	//  },
	"tooltip": {visible:false},
	// tooltip: {
	// 		formatter: function() {
	// 			var s = '<b>'+ Highcharts.dateFormat('%b %Y', this.x) + '</b><table class="tooltip">';
	// 			$.each(this.points, function(i, point) {
	// 				s += '<tr><td style="color:'+point.series.color+'">'+
	// 					point.series.name+':</td>'+
	// 					'<td style="text-align: right">'+
	// 					Highcharts.numberFormat(point.y, 0)+'%</td></tr>';
	// 			});
	// 			s += '</table>';
	// 			return s;
	// 		}
	// 	},


	plot: {
			marker: {
				borderWidth : 10,
				type: "circle",
				visible: false,
				color: 'pink',
				formatter: function(){
					if ( this.x == Date.UTC(2013, 10, 1) ) {
						return this.y+'%';
					}
				}
			}
	},
	"series": [
		{"text": social_networking_data[0].name, "values": social_networking_data[0].data},
		{"text": social_networking_data[1].name, "values": social_networking_data[1].data},
		{"text": social_networking_data[2].name, "values": social_networking_data[2].data},
		{"text": social_networking_data[3].name, "values": social_networking_data[3].data},
		{"text": social_networking_data[4].name, "values": social_networking_data[4].data}
	]
};
    zingchart.render({
        id:'chartDiv',
        data:chartData,
        height: 400
    });
});
	
	