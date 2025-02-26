const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello World2!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("contact page");
});

app.get("/hello", (req, res) => {
  res.send("hello page");
});

app.get("/hello/:slug", (req, res) => { // URL variable can be accessed by req.params.slug
  res.send(`Hello ${req.params.slug}`);
});

app.get("/hello/:slug/:second", (req, res) => {
  res.send(`Hello ${req.params.slug} and ${req.params.second}`);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
