# **Node Js Programming**

---
What is Node?


# Print Hello world
```
var http= require('http');
var server = http.createServer(function(req, res){
 res.writeHead(200);
 res.en('Hello Http');;
});
```

**Install PM2**
```
Step 0. npm install pm2 -g

$ pm2 start xxxx.js --name="app_name"
$ pm2 list
$ pm2 show id
$ pm2 logs app_name
```
