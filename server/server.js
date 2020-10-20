/**
 * author-UKSD
 */

var request = require("request");
const express = require("express");
const cors = require("cors");
const PORT = 5000;
const app = express();

app.use(cors());

app.listen(PORT, () => console.log(`Server Started in ${PORT}`));

//app.get("/", (req, res) => res.send("Shree"));

const API = "http://api.openweathermap.org/data/2.5/forecast?id=1254348&APPID=3b800e75aee50f6627e446d50e8bc2ca";
//Tirupur
app.get("/", (req, res) => {
    request(
        API,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
                console.log(outputData.time);
            }
        }
    )

});
//Chennai
app.get("/chennai", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1264527&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});

//Coimbatore
app.get("/coimbatore", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1273865&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});

//Ooty
app.get("/ooty", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1253993&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});

//Pollachi
app.get("/pollachi", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1259440&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});

//Trichy
app.get("/trichy", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=7603116&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});


//Erode
app.get("/erode", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1272013&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});

//theni
app.get("/theni", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1254745&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});

//salem
app.get("/salem", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1629104&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});

//madurai
app.get("/madurai", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1264521&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});

//Namakkal
app.get("/namakkal", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1262039&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var outputData = {
                    city: parsedBody.city.name,
                    country: parsedBody.city.country,
                    temp: parsedBody.list[0].main.temp,
                    humid: parsedBody.list[0].main.humidity,
                    sky: parsedBody.list[0].weather[0].main,
                    skydesc: parsedBody.list[0].weather[0].description,
                    fulltime: parsedBody.list[0].dt_txt,
                    time: parsedBody.list[0].dt_txt.substring(11, 13),
                    month: parsedBody.list[0].dt_txt.substring(5, 7),
                    date: parsedBody.list[0].dt_txt.substring(8, 10)
                };
                res.send(outputData);
            }
        }
    )

});




//Total APIS
app.get("/apisuksd", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/forecast?id=1254348&APPID=3b800e75aee50f6627e446d50e8bc2ca",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var flist = parsedBody.list[0];
                res.send(flist);
            }
        }
    )

});
