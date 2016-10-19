// init project
var req = require("request");
var express = require('express');
var app = express();

// https://github.com/nodemailer/nodemailer
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://'+process.env.GUSER+'%40gmail.com:'+process.env.GPASS+'@smtp.gmail.com');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/firsttimer", function (request, response) {
  response.sendFile(__dirname + '/views/first-time.html');
});

app.get("/chat", function (request, response) {
  response.sendFile(__dirname + '/views/chat.html');
});

app.get("/createprofile", function (request, response) {
  response.sendFile(__dirname + '/views/create-profile.html');
});

app.get("/practice", function (request, response) {
  response.sendFile(__dirname + '/views/practice-home.html');
});

app.get("/empathy", function (request, response) {
  response.sendFile(__dirname + '/views/practice-empathy.html');
});

app.get("/observation", function (request, response) {
  response.sendFile(__dirname + '/views/practice-observation.html');
});

app.get("/interviewing", function (request, response) {
  response.sendFile(__dirname + '/views/practice-interviewing.html');
});

app.get("/synthesis", function (request, response) {
  response.sendFile(__dirname + '/views/practice-synthesis.html');
});

app.get("/presenting", function (request, response) {
  response.sendFile(__dirname + '/views/practice-presenting.html');
});

app.get("/recordvideo", function (request, response) {
  response.sendFile(__dirname + '/views/record-video.html');
});

app.get("/playvideo", function (request, response) {
  response.sendFile(__dirname + '/views/play-video.html');
});

app.get("/history", function (request, response) {
  response.sendFile(__dirname + '/views/practice-history.html');
});

app.get("/invite", function (request, response) {
  response.sendFile(__dirname + '/views/invite.html');
});

app.get("/people", function (request, response) {
  response.sendFile(__dirname + '/views/people.html');
});

app.get("/profile", function (request, response) {
  response.sendFile(__dirname + '/views/profile.html');
});

app.get("/settings", function (request, response) {
  response.sendFile(__dirname + '/views/settings.html');
});

app.get("/help", function (request, response) {
  response.sendFile(__dirname + '/views/help.html');
});

app.get("/feedback", function (request, response) {
  response.sendFile(__dirname + '/views/feedback.html');
});

app.get("/notifications", function (request, response) {
  response.sendFile(__dirname + '/views/notifications.html');
});

app.post("/sendinvite", function (request, response) {
  var mailOptions = request.query.mailoptions;
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Invite sent: ' + info.response);
  });
  response.sendStatus(200);
});

app.post("/sendfeedback", function (request, response) {
  var mailOptions = request.query.mailoptions;
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Feedback sent: ' + info.response);
  });
  response.sendStatus(200);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
