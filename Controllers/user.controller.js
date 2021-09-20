const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await User.findOne({ email });

        if (findUser) {
            return res
                .status(400)
                .send({ errors: [{ msg: "email should be unique" }] });
        }

        const newUser = new User({ ...req.body });

        const hashedpassword = await bcrypt.hash(password, saltRounds);
        newUser.password = hashedpassword;

        await newUser.save();

        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "2h" }
        );

        res.status(200).send({ msg: "register succ", user: newUser, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "user not saved" }] });
    }
};

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await User.findOne({ email });

        if (!findUser) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credential" }] });
        }

        const comparePass = await bcrypt.compare(password, findUser.password);

        if (!comparePass) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credential" }] });
        }

        const token = jwt.sign(
            {
                id: findUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "2h" }
        );
        res.status(200).send({
            msg: "login successfully",
            user: findUser,
            token,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "can not login" }] });
    }
};
exports.removeUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.deleteOne({ _id });
        res.status(200).send({ msg: "item is removed from cart", user });
    } catch (error) {
        res.status(500).send({
            errors: [{ msg: "can not bring the item" }],
        });
    }
};
exports.getUser = async (req, res) => {
    console.log(req.params);
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id });
        res.status(200).send({ msg: "this is the user", user });
    } catch (error) {
        console.log("hello");
        res.status(500).send({
            errors: [{ msg: "can not bring the item" }],
        });
    }
};
exports.updateUser = async (req, res) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { ...req.body } },
            { new: true }
        );

        res.status(200).send({ msg: "toUpdate", user });
    } catch (error) {
        res.status(500).send({ msg: error });
    }
};
