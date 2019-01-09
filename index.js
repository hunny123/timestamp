var express = require('express');
var app = express();
app.get('/',function(req,res){

    res.sendfile('index.html');
});



app.get('/api/timestamp/:id', function (req, res) {
   // First read existing users.
      var naturalDate = null;
      var unixDate = null;
      var dateval = req.params.id;
      var dateformat ={
      	year:"numeric",
      	month:"long",
      	day:"numeric"
      };
      if(isNaN(dateval)){
      	 naturalDate = new Date(dateval).toUTCString();
      	//naturalDate = naturalDate.toLocaleDateString("en-us".dateformat)
         unixDate = new Date(dateval).getTime();
      }
      else{
      	unixDate = dateval;
      	naturalDate = new Date(dateval/1000).toUTCString();
      }
      res.json({unix:unixDate,natural:naturalDate });
});
var server = app.listen(5000, function () {
   
   console.log("Example app listening at http:");
})