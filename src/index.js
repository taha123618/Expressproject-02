const express = require('express');
const app = express();
const hbs = require("hbs"); 
const path = require("path");
const port = process.env.PORT || 8000;


// use satic content 
const satic_Path = path.join(__dirname,"../public");
// partial 
const tempview_Path = path.join(__dirname,"../temp/views");
// use parial template engine 
const partials_path = path.join(__dirname,"../temp/partial");


app.use(express.static(satic_Path));
app.set('view engine', 'hbs');
app.set('views',tempview_Path);
hbs.registerPartials(partials_path);




// routhing
app.get("/",(req,res) => {
    res.render("index.hbs");
     });

     app.get("/about",(req,res) => {
      res.render("about.hbs");
       });

       app.get("/services",(req,res) => {
        res.render("services.hbs");
         });

         app.get("/work",(req,res) => {
          res.render("work.hbs");
           });
    
  

    //  404
    app.get("*",(req,res) => {
        res.render("404.hbs",{
         errmsg : "Opps! Page Not Found"
        });
      //   res.send("Opps! PAge Not Found");
        }); 

        // listinnng 

 app.listen(port,() => {
    console.log(`listing.... to ${port}`)
 });
