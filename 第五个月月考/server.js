var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
	if(req.url=='/1'){
		fs.readFile("json/1.json","utf-8",function(err,data){
		if(!err){
		 res.end(data)
		}
		
	})
	}else if(req.url=='/2'){
		fs.readFile("json/2.json","utf-8",function(err,data){
		if(!err){
		 res.end(data)
		}
		
	})
	}

}).listen(7575,function(){
	console.log('启动成功')
})