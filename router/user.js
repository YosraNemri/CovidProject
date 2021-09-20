const express = require("express");
const {
    Register,
    Login,
    updateUser,
    removeUser,
    getUser,
} = require("../Controllers/user.controller");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

const {
    validation,
    registerValidate,
    loginValidate,
} = require("../middleware/validateUser");

router.get("/", (req, res) => {
    res.send("testing router");
});

router.post("/register", registerValidate(), validation, Register);
router.post("/login", loginValidate(), validation, Login);

router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
});
router.put("/:id", updateUser);
router.delete("/:id", removeUser);

//router.get("/:id", getUser);

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ msg: "list of users", users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "user is not be saved" }] });
    }
});

module.exports = router;
