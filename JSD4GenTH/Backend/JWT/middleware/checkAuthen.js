const JWT = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../.env");

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      errors: [
        {
          msg: "No token found",
        },
      ],
    });
  }

  try {
    const user = await JWT.verify(token, "lkij213h234gui2h34kjhkj5436uasd9");
    req.user = user.email;
    next();
  } catch (error) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid Token",
        },
      ],
    });
  }
};
