
var request = require("request");//make HTTP requests
var cheerio = require("cheerio");//parse and select HTML elements
var URL = require("url");//parse URL
var http = require("http");
var d3 = require("d3");
var fs = require("fs");
var exe = require('child_process');

			   
request(
	{
		url : "http://1968.freeway.gov.tw/traffic/index/fid/10010",
		method : "GET"		
	}, 
	function(error,response,body){
		if(error || !body){
			return;
		}
		var $ = cheerio.load(body);
		var result = [];
		var titles = $("td");
		for(var i = 0; i < titles.length;i++){
			if(i%4 != 3)
				if(i%4 == 1)
					result.push($(titles[i]).text()
							.replace(/\s+/g,"")
							.replace(/\r\n|\n/g,"")
							.replace(/\d+/g,"")
							.replace("(","")
							.replace(")","")
							.replace("-","_")
							.replace("(","").replace(")",""));
			else	
					result.push($(titles[i]).text().replace(/\s+/g,"").replace(/\r\n|\n/g,""));
		}
		console.log(result);
		fs.writeFileSync("speedData/Speed01.json" , JSON.stringify(result));
	}
);

request(
	{
		url : "http://1968.freeway.gov.tw/traffic/index/fid/10020",
		method : "GET"		
	}, 
	function(error,response,body){
		if(error || !body){
			return;
		}
		var $ = cheerio.load(body);
		var result = [];
		var titles = $("td");
		for(var i = 0; i < titles.length;i++){
			if(i%4 != 3)
				if(i%4 == 1)
					result.push($(titles[i]).text()
							.replace(/\s+/g,"")
							.replace(/\r\n|\n/g,"")
							.replace(/\d+/g,"")
							.replace("(","")
							.replace(")","")
							.replace("-","_")
							.replace("(","").replace(")",""));
			else	
					result.push($(titles[i]).text().replace(/\s+/g,"").replace(/\r\n|\n/g,""));
		}
		console.log(result);
		fs.writeFileSync("speedData/Speed02.json" , JSON.stringify(result));
	}
);

request(
	{
		url : "http://1968.freeway.gov.tw/traffic/index/fid/10030",
		method : "GET"		
	}, 
	function(error,response,body){
		if(error || !body){
			return;
		}
		var $ = cheerio.load(body);
		var result = [];
		var titles = $("td");
		for(var i = 0; i < titles.length;i++){
			if(i%4 != 3)
				if(i%4 == 1)
					result.push($(titles[i]).text()
							.replace(/\s+/g,"")
							.replace(/\r\n|\n/g,"")
							.replace(/\d+/g,"")
							.replace("(","")
							.replace(")","")
							.replace("-","_")
							.replace("(","")
							.replace(")","")
							.replace("(","")
							.replace(")",""));
			else	
					result.push($(titles[i]).text().replace(/\s+/g,"").replace(/\r\n|\n/g,""));
		}
		console.log(result);
		fs.writeFileSync("speedData/Speed03.json" , JSON.stringify(result));
	}
);

request(
	{
		url : "http://1968.freeway.gov.tw/traffic/index/fid/10040",
		method : "GET"		
	}, 
	function(error,response,body){
		if(error || !body){
			return;
		}
		var $ = cheerio.load(body);
		var result = [];
		var titles = $("td");
		for(var i = 0; i < titles.length;i++){
			if(i%4 != 3)
				if(i%4 == 1)
					result.push($(titles[i]).text()
							.replace(/\s+/g,"")
							.replace(/\r\n|\n/g,"")
							.replace(/\d+/g,"")
							.replace("(","")
							.replace(")","")
							.replace("-","_")
							.replace("(","").replace(")",""));
			else	
					result.push($(titles[i]).text().replace(/\s+/g,"").replace(/\r\n|\n/g,""));
		}
		console.log(result);
		fs.writeFileSync("speedData/Speed04.json" , JSON.stringify(result));
	}
);

request(
	{
		url : "http://1968.freeway.gov.tw/traffic/index/fid/10050",
		method : "GET"		
	}, 
	function(error,response,body){
		if(error || !body){
			return;
		}
		var $ = cheerio.load(body);
		var result = [];
		var titles = $("td");
		for(var i = 0; i < titles.length;i++){
			if(i%4 != 3)
				if(i%4 == 1)
					result.push($(titles[i]).text()
							.replace(/\s+/g,"")
							.replace(/\r\n|\n/g,"")
							.replace(/\d+/g,"")
							.replace("(","")
							.replace(")","")
							.replace("-","_")
							.replace("(","").replace(")",""));
			else	
					result.push($(titles[i]).text().replace(/\s+/g,"").replace(/\r\n|\n/g,""));
		}
		console.log(result);
		fs.writeFileSync("speedData/Speed05.json" , JSON.stringify(result));
	}
);

request(
	{
		url : "http://1968.freeway.gov.tw/traffic/index/fid/10060",
		method : "GET"		
	}, 
	function(error,response,body){
		if(error || !body){
			return;
		}
		var $ = cheerio.load(body);
		var result = [];
		var titles = $("td");
		for(var i = 0; i < titles.length;i++){
			if(i%4 != 3)
				if(i%4 == 1)
					result.push($(titles[i]).text()
							.replace(/\s+/g,"")
							.replace(/\r\n|\n/g,"")
							.replace(/\d+/g,"")
							.replace("(","")
							.replace(")","")
							.replace("-","_")
							.replace("(","").replace(")",""));
			else	
					result.push($(titles[i]).text().replace(/\s+/g,"").replace(/\r\n|\n/g,""));
		}
		console.log(result);
		fs.writeFileSync("speedData/Speed06.json" , JSON.stringify(result));
	}
);

request(
	{
		url : "http://1968.freeway.gov.tw/traffic/index/fid/10080",
		method : "GET"		
	}, 
	function(error,response,body){
		if(error || !body){
			return;
		}
		var $ = cheerio.load(body);
		var result = [];
		var titles = $("td");
		for(var i = 0; i < titles.length;i++){
			if(i%4 != 3)
				if(i%4 == 1)
					result.push($(titles[i]).text()
							.replace(/\s+/g,"")
							.replace(/\r\n|\n/g,"")
							.replace(/\d+/g,"")
							.replace("(","")
							.replace(")","")
							.replace("-","_")
							.replace("(","").replace(")",""));
			else	
					result.push($(titles[i]).text().replace(/\s+/g,"").replace(/\r\n|\n/g,""));
		}
		console.log(result);
		fs.writeFileSync("speedData/Speed08.json" , JSON.stringify(result));
	}
);

request(
	{
		url : "http://1968.freeway.gov.tw/traffic/index/fid/10100",
		method : "GET"		
	}, 
	function(error,response,body){
		if(error || !body){
			return;
		}
		var $ = cheerio.load(body);
		var result = [];
		var titles = $("td");
		for(var i = 0; i < titles.length;i++){
			if(i%4 != 3)
				if(i%4 == 1)
					result.push($(titles[i]).text()
							.replace(/\s+/g,"")
							.replace(/\r\n|\n/g,"")
							.replace(/\d+/g,"")
							.replace("(","")
							.replace(")","")
							.replace("-","_")
							.replace("(","").replace(")",""));
			else	
					result.push($(titles[i]).text().replace(/\s+/g,"").replace(/\r\n|\n/g,""));
		}
		console.log(result);
		fs.writeFileSync("speedData/Speed10.json" , JSON.stringify(result));
	}
);

exe.exec("start http://localhost:8000/HighWaySpeed.html");


	