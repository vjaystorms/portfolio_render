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
 var mode = "b"
 var mode_invert = "w"
 app.get("/", (req, res) => {
   if (z === 1) {
     z++;
     res.render("home", {
       mode: mode,
       mode_invert: mode_invert
     });
   } else {
     res.redirect("/Home-2")
   }
 })
 app.get("/Home-2", (req, res) => {
   res.render("home2", {
     mode: mode,
     mode_invert: mode_invert
   });
 })
 ///////  PORTFOLIO    //////////
 var n = 1
 app.post("/toggle", (req, res) => {
   z = 1
   if (n === 1) {
     n = 0
     mode = "w"
     mode_invert = "b"
   } else if (n == 0) {
     n = 1
     mode = "b"
     mode_invert = "w"
   }
   res.redirect("/");
 })
 /////////
 app.post("/", (req, res) => {
   // res.render("home", {});
   z = 1
   res.redirect("/");
 })
 /////////////////////////////
 app.post("/Home-2", (req, res) => {
   res.redirect("/Home-2");
 })
 app.get("/about", (req, res) => {
   res.render("about", {
     mode: mode,
     mode_invert: mode_invert
   })
 })
 app.get("/contact", (req, res) => {
   res.render("contact", {
     mode: mode,
     mode_invert: mode_invert
   })
 })
 app.get("/work", (req, res) => {
   res.render("work", {
     mode: mode,
     mode_invert: mode_invert
   })
 })
 app.listen(process.env.PORT || 3000, function() {
   console.log("Server is up and running at port 3000.");
 });
