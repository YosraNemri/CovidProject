const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin === true) {
        next();
    } else {
        res.status(401).send("Not authorized as an admin");
    }
};
module.exports = isAdmin;
