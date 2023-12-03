module.exports = (req, res, next) => {
    const token = req.cookies.ac_token;
    if (!token) {
      return res.json({ redirectTo: "/login" });
    } else {
      next();
      return res.send("You aleady have authentication");
    }
  };
  