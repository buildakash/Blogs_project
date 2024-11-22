//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //createdAt means it will came as descending order which is newest to oldest blogs
    .then((result) => {
      res.render("blogs/ejsindex", { title: "All blogs", blogs: result });
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  // console.log(id)
  Blog.findById(id)
    .then((result) =>
      res.render("blogs/ejsdetails", { title: "Blog Details", blog: result })
    )
    .catch((err) => res.status(404).render("ejs404", { title: "404" }));
};

const blog_create_get = (req, res) => {
  res.render("blogs/ejscreate", { title: "CreateBlogs" });
};

const blog_create_post = (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
