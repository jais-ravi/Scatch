const jwt = require("jsonwebtoken");

const genrateToken = (user) => {
    return jwt.sign({ email: user.email, id:  user._id }, process.env.JWT_KEY); // session expire kr skte h -> ,{expiresIn:'1h'}; se
};

module.exports.genrateToken = genrateToken;