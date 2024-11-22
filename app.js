//express

const express = require("express");
const { snakeCase } = require("lodash");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogroutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://nodejsc:nodejsc123@node-c.8lhsl.mongodb.net/node-l?retryWrites=true&w=majority&appName=Node-c";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to db");
    console.log("Port Listening on #))):");
    app.listen(3000);
  })
  .catch((err) => console.log("Error:", err));

//viewengine
app.set("view engine", "ejs");

//lister for request
// app.listen(3000);

//middleware
// app.use((req, res, next) => {
//   console.log("new request made:");
//   console.log("host:", req.hostname);
//   console.log("path:", req.path);
//   console.log("method:", req.method);
//   next();//when we doesn't give that next means the middleware stop , the express doesn't know to move on
// });

// app.use((req,res,next) => {
//   console.log("the next middleware...");
//   next();
// })
//middleware & static files
app.use(express.static("public")); //so this will appear the css style to index page through middleware statically - but it doesn't place wrok in the placement of html head tag
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); //this middleware is optional for viewing the req.body, this will work to navigate all url , this is for app.post call of blogs

app.get("/", (req, res) => {
  // res.send('<p>Home Page</p>');//normal send
  // res.sendFile("./views/index.html", { root: __dirname });//for normal sendfile
  // const blogs = [
  //   {
  //     title: "EJS",
  //     snippets:
  //       "EJS or Embedded Javascript Templating is a templating engine used by Node.js. Template engine helps to create an HTML template with minimal code. ",
  //   },
  //   {
  //     title: "EJS Role",
  //     snippets:
  //       "It allows you to generate dynamic HTML content by embedding JavaScript code within your HTML templates",
  //   },
  //   {
  //     title: "EJS - HTML",
  //     snippets:
  //       ' It"s like writing regular HTML but with JavaScript sprinkled in, which is great for dynamic content.',
  //   },
  // ];
  // res.render("ejsindex", { title: "Home", blogs }); //this is for ejs using render

  //redirect to another path for blogs -
  res.redirect("/blogs");
  // console.log(__dirname);
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });//for normal sendfile
  res.render("ejsabout", { title: "About" });
  // console.log(__dirname);
});



//mongoose sandbox routes
// app.get("/add-blogs", (req, res) => {
//   const blog = new Blog({
//     title: "A new Blog 2",
//     snippets: "Need to view a new Blog",
//     body: "More about a new Blogs",
//   });

//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("6735bc1dc684def3ff1405db")
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// });

//blog routes -> which is blogRoutes
app.use('/blogs',blogroutes)

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page - app.use should use only in last of the code
app.use((req, res) => {
  // res.sendFile("./views/404.html", { root: __dirname });
  res.render("ejs404", { title: "404" });
});
