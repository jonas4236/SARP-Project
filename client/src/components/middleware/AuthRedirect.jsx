module.exports = (req, res, next) => {
  if (res.data.status === "success") {
    return res.redirect("/");
  }
  next();
};
