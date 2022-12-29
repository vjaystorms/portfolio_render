 const express = require("express");
 const bodyParser = require("body-parser");
 const path = require("path")
 const app = express();
 app.set("view engine", "ejs");
 app.use(bodyParser.urlencoded({
   extended: true
 }));
 app.use(express.static("public"));
 var z = 1;
 app.get("/", (req, res) => {
   if (z === 1) {
     z++;
     res.render("home", {});

   } else {
     res.render("home2", {});
   }
 })
 app.get("/about", (req, res) => {
   res.render("about", {})
 })
 app.get("/contact", (req, res) => {
   res.render("contact", {})
 })
 app.get("/work", (req, res) => {
   res.render("work", {})
 })
 app.listen(process.env.PORT || 3000, function() {
   console.log("Server is up and running at port 3000.");
 });
