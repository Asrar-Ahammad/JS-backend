const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let siteName = "Adidas";
    let searchText = "This is a search text."
    arr = [1, 32, 42]
  res.render("index", { siteName:siteName, searchText:searchText });
});

app.get("/blogpost/:slug", (req, res) => {
    let blogTitle = "Adidas";
    let blogContent = "This is the blog content of the adidas brand."
  res.sendFile("blogpost", { blogTitle:blogTitle, blogContent:blogContent});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
