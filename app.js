// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently:" + dt.myDateTime());
//   res.end('Hello world');
// }).listen(8080);

// var http = require('http');
// http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);
// read files

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//   fs.readFile('demofile1.html', function(err, data){
//     res.writeHead(200, {'Content-Type': "text/html"});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// create files
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'Hello content', function(err){
//   if(err) throw err;
//   console.log('saved');
// });

// open file 
// var fs = require('fs');
// fs.open('mynewfile1.txt', 'w', function(err, file){
//   if(err) throw err;
//   console.log('saved');
// });

// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'Hello hillary', function(err){
//   if (err) throw err;
//   console.log('saved');
// });

// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'This is my text', function(err){
//   if (err) throw err;
//   console.log('updated');
// });

// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'This is Hillary', function(err){
//   if (err) throw err;
//   console.log('Replaced');
// });

// var fs = require('fs');
// fs.unlink('mynewfile3.txt', function (err){
//   if (err) throw err;
//   console.log('file deleted');
// });

// var fs = require('fs');
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err){
//   if (err) throw err;
//   console.log('file renamed');
// });

// URL module

// var url = require('url');
// var adr = 'http://localhost:8080/default.html?year=2017&month=february';
// var q = url.parse(adr, true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// var qdata = q.query;
// console.log(qdata.month);
// console.log(qdata.year);
// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function(req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   console.log(filename);
//   fs.readFile(filename, function(err, data) {
//      if (err) {
//        res.writeHead(404, {'Content-Type': 'text/html'});
//        return res.end('404 Not Found');
//      }
//      res.writeHead(200, {'Content-Type': 'text/html'});
//      res.write(data);
//      return res.end();
//   });
// }).listen(8080);

// Events in Node.js
// var fs = require('fs');
// var rs = fs.createReadStream('./demofile1.html');
// rs.on('open', function(){
//   console.log('The file is open');
// });

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var myEventHandler = function () {
//   console.log('I hear a scream');
// };

// Assign event handler
// eventEmitter.on('scream', myEventHandler);

// fire the scream event
// eventEmitter.emit('scream');

// upload files
// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = 'C:Users/Hillary/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function () {
//         if (err) throw err;
//         res.write('File uploaded and moved');
//         res.end();
//       });
//     });
//   } else {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);
// var nodemailer = require(nodemailer);

// var transporter = nodemailer.createTransporter({
//   service: 'gmail',
//   auth: {
//     user: 'hillaryodhiambo282@gmail.com',
//     pass: '',
//   }
// });

// var mailOptions = {
//   from: 'hillaryodhiambo282@gmail.com',
//   to: 'hillaryodhiambo282@gmail.com',
//   subject: 'This is a test',
//   text: 'That was easy',
// };

// transporter.sendMail(mailOptions, function(error, info){
//  if(error) {
//    console.log(error);
//  } else {
//    console.log('Email sent: ' + info.response );
//  }
// });

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hillaryodhiambo282@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'hillaryodhiambo282@gmail.com',
  to: 'hillaryodhiambo282@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});