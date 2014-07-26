// Require the twilio and express modules
//I updated this file so that it should work on a local server or on cloud9
var twilio = require('twilio'),
    express = require('express');
 
// Create an express application
var app = express();

var twilio_SID = "ACb47e5c87efd45b887f4cd08a34a9b900";
var twilio_TOKEN = "07411f104edfdff825cf7f230894a8a0";
var twilio_APPSID = "AP20378ee853d9d1084de985f54b37d64a";

var dev_Port;
dev_Port = process.env.PORT || 1337;
 
// Render an HTML page which contains a capability token that
// will grant permission to accept inbound calls to the ID
// "kevin" (this could be any string)
app.get('/', function(req, res) {
 
    // Create an object which will generate a capability token
    // Replace these two arguments with your own account SID
    // and auth token:
    var capability;
    capability = new twilio.Capability(twilio_SID, twilio_TOKEN);
 
    //Give the capability generator permission to accept incoming
    // calls to the ID "kevin"
    capability.allowClientIncoming('kevin');
 
    // Give the capability generator permission to make outbound calls,
    // Using the following TwiML app to request call handling instructions:
    capability.allowClientOutgoing(twilio_APPSID);
 
    // Render an HTML page which contains our capability token
    res.render('index.ejs', {
        token: capability.generate()
    });
});
 
app.listen(dev_Port);
console.log('Visit http://localhost:%d/ to accept inbound calls and make outbound calls!', dev_Port);
