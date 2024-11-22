const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //lodash
  const randomnum = _.random(0, 20);
  console.log(randomnum);

  const greet = _.once(() => {
    console.log("hello greet");
  })
  greet(); // this will print once event when u call many times - we used(once)
  greet();

  // console.log('Request made');
  // console.log("Request ")
  // console.log(req.url, req.method);

  //set header content-type
  // res.setHeader("Content-Type", 'text/plan');
  // res.write('Helo, akash');
  res.setHeader("Content-Type", "text/html");
  // res.write('<p>Hello akash</p>');
  // res.write('<p>Hello akash</p>');
  // res.end();

  //Send html file through fs and routing
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //redirects
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port : 3000");
});
