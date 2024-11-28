// To verify if request is authenticated
const isLogin = (req, res, next) => {
    next();
};

// To verify if request is authenticated user is admin
const isAdmin = (req, res, next) => {
    next();
};

module.exports = { isLogin, isAdmin };