const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);
    var url = "https://us2.api.mailchimp.com/3.0/lists/61c25fee69";
    var options = {
        method: "POST",
        auth: "manna:9b4fd40cad4d3f37813697c68837a45d-us2"
    }

    const request = https.request(url, options, function(response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/index.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("I'm hearing");
});

//API KEY
//9b4fd40cad4d3f37813697c68837a45d-us2

//audience id by mailchimp
//61c25fee69