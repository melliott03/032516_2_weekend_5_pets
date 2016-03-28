var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//DB STUFF
mongoose.connect("mongodb://localhost/week5_weekend_project");
mongoose.model("Pets", new Schema({"name" : String, "animal" : String, "age" : Number, "url" : String}));
var Pet = mongoose.model("Pets");

//
app.get("/pets", function(req,res){
  Pet.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

app.post("/pets", function(req,res){
  console.log("req.body in post route: ", req.body);

  var addedPet = new Pet({"name" : req.body.name, "animal" : req.body.animal, "age" : req.body.age, "url" : req.body.url});
  addedPet.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});


app.delete('/pets/:id', function (req, res) {
    Pet.findById(req.params.id)
        .exec(function(err, doc) {
            if (err || !doc) {
                res.statusCode = 404;
                res.send({});
            } else {
                doc.remove(function(err) {
                    if (err) {
                        res.statusCode = 403;
                        res.send(err);
                    } else {
                        res.send({});
                    }
                });
            }
        });
});

app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening", app.get("port"));
});

module.exports = app;
