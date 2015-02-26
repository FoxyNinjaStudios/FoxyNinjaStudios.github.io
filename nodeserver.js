
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
	mailOptions.to = "contact@foxyninjastudios.com"
	mailOptions.subject = "Contact : foxyninjastudios.com";
	mailOptions.text = 
                        "\n"+
	transport.sendMail(mailOptions, function(error, response){console.log(error)});
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
