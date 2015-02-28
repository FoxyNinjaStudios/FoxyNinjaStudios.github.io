
  var nodemailer = require("nodemailer");

  // create reusable transport method (opens pool of SMTP connections)
   var transporter = nodemailer.createTransport("SMTP",{
       service: "Gmail",
        auth: {
           user: "noreply@foxyninjastudios.com",
           pass: "HasNothing11"
        }
    });
  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: "FNS No-reply<noreply@foxyninjastudios.com>", // sender address
    to: "",
    subject: "CONTACT: foxyninjastudios.com", // Subject line
    text: '',
    html: ""
  }
  var express = require("express"),
        app = express(),
            bodyParser = require('body-parser'),
                errorHandler = require('errorhandler'),
                    methodOverride = require('method-override'),
                        hostname = process.env.HOSTNAME || 'localhost',
                     //       port = parseInt(process.env.PORT, 10) || 4567;
                              port = 8080;

app.get("/", function (req, res) {
      res.redirect("/index.html");
});

app.get("/handleContact", function (req, res) {
	mailOptions.to = req.query.email;
	mailOptions.bcc = "contact@foxyninjastudios.com"
	mailOptions.replyTo = "contact@foxyninjastudios.com"
	mailOptions.subject = "Thank you for your interest in Foxy Ninja Studios";
	mailOptions.text = 
    "We will get back to you ASAP. We recieved the following information from you at " + new Date().toUTCString() + " :\n\n\n" + JSON.stringify(req.query, null, 2) + "\n";
                     
	transporter.sendMail(mailOptions, function(error, response){console.log(error)});
    res.end("1");
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
      extended: true
}));
app.use(express.static(__dirname + '/'));
app.use(errorHandler({
      dumpExceptions: true,
      showStack: true
}));

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
