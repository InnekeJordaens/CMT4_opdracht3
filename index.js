//test
console.log("hello world");

//constanten
const express = require("express");
const app = express();
const data = require("./data/works.json");

//views en public
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));

//webpagina's
app.get("/", function(request, response){
  response.render("home", {
    works: data.works
  });
});

app.get("/contact", function(request, response){
  response.render("contact");
});

app.get("/gallery", function(request, response){
  response.render("gallery", {
    works: data.works
  });
});

app.get("/work/:workid", function(req,res){
  res.render("work_detail", {
    works: data.works[req.params.workid]
  });
});

//port
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
