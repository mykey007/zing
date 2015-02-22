$(function () {

	/* ----------------------------------------------- */
	/* Chart 10A.1/2 - Social Networking Use, p. 237-8 ------ Chart 9 */
	/* ----------------------------------------------- */
	
	var social_networking_data = [{
			name: 'All Internet Users',
			data: [
				[Date.UTC(2005, 1, 1), 8],
				[Date.UTC(2006, 7, 1), 16],
				[Date.UTC(2008, 4, 1), 29],
				[Date.UTC(2009, 3, 1), 46],
				[Date.UTC(2010, 4, 1), 61],
				[Date.UTC(2011, 7, 1), 64],
				[Date.UTC(2012, 1, 1), 66],
				[Date.UTC(2012, 7, 1), 69],
				[Date.UTC(2012, 11, 1), 67],
				[Date.UTC(2013, 4, 1), 72],
				[Date.UTC(2013, 8, 1), 73]
			]
		},{
			name: '18-29',
			data: [
				[Date.UTC(2005, 1, 1), 9],
				[Date.UTC(2006, 7, 1), 49],
				[Date.UTC(2008, 4, 1), 67],
				[Date.UTC(2009, 3, 1), 76],
				[Date.UTC(2010, 4, 1), 86],
				[Date.UTC(2011, 7, 1), 87],
				[Date.UTC(2012, 1, 1), 86],
				[Date.UTC(2012, 7, 1), 92],
				[Date.UTC(2012, 11, 1), 83],
				[Date.UTC(2013, 4, 1), 89],
				[Date.UTC(2013, 8, 1), 90]
			]
		},{
			name: '30-49',
			data: [
				[Date.UTC(2005, 1, 1), 7],
				[Date.UTC(2006, 7, 1), 8],
				[Date.UTC(2008, 4, 1), 25],
				[Date.UTC(2009, 3, 1), 48],
				[Date.UTC(2010, 4, 1), 61],
				[Date.UTC(2011, 7, 1), 68],
				[Date.UTC(2012, 1, 1), 72],
				[Date.UTC(2012, 7, 1), 73],
				[Date.UTC(2012, 11, 1), 77],
				[Date.UTC(2013, 4, 1), 78],
				[Date.UTC(2013, 8, 1), 78]
			]
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
            "size":8,
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
            "shadow":true,
            "height":"35%",
            "width":"15%",
            "padding":"5px",
            "border-radius":"3px",
            "alpha":0.8,
            "headerText": "%k",
            "text":"<b>%plot-text:</b> <span>%node-value%</span>"
        }
    },
    "source": {
    	padding:5,
        "text": "Source: http://www.pewresearch.org/next-america/",
        "align": "left"
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
	plot: {
		"lineWidth":2,
			marker: {
				borderWidth : 20,
				type: "circle",
				visible: false
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
        height: 400,
        defaultsurl:"./themes/social.txt"
    });
});