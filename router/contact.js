const express = require("express");
// const { findByIdAndDelete } = require("../models/Contact");
const router = express.Router();
const Contact = require("../models/Contact");
const isAdmin = require("../middleware/isAdmin");
const isAuth = require("../middleware/isAuth");
const Comment = require("../models/Comment");

router.post("/", isAuth, isAdmin, async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        console.log(name);
        if (!name || !email) {
            return res.status(400).send("name and email are required");
        }
        const contactt = await Contact.findOne({ email });
        if (contactt) {
            return res.status(400).send("contact already exists");
        }

        const contact = new Contact({
            name,
            email,
            phone,
        });
        await contact.save();
        res.status(200).send({ msg: "contact added", contact });
    } catch (error) {
        res.status(500).send("impossible to add contact");
    }
});

router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).send({ msg: "all contacts", contacts });
    } catch (error) {
        res.status(500).send("impossible to get contacts");
    }
});

router.put("/:Id", isAuth, isAdmin, async (req, res) => {
    try {
        const { Id } = req.params;
        //   const id=req.params.Id
        const contact = await Contact.findOneAndUpdate(
            { _id: Id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "contact edited", contact });
    } catch (error) {
        res.status(500).send("impossible to edit contacts");
    }
});

router.delete("/:Id", isAuth, isAdmin, async (req, res) => {
    try {
        const { Id } = req.params;
        const contact = await Contact.findByIdAndDelete(Id);
        res.status(200).send({ msg: "contact deleted", contact });
    } catch (error) {
        res.status(500).send("impossible to delete contacts");
    }
});

router.get("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const contact = await Contact.findOne({ _id: Id });
        res.status(200).send({ msg: "contact", contact });
    } catch (error) {
        res.status(500).send("impossible to contacts");
    }
});
// add comment
router.post("/comment/:id", isAuth, async (req, res) => {
    try {
        const { text } = req.body;
        const userId = req.user._id;
        const newComment = await new Comment({ text, userId });
        await newComment.save();
        // console.log(newComment._id);

        await post.comments.push(newComment._id);
        await post.save();
        res.status(200).send({
            msg: "the comment is added",
            newComment,

            user: req.user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "error" }] });
    }
});

router.delete("/comments/:commentId", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.postId,
            {
                $pull: { comments: req.params.commentId },
            },
            { new: true }
        );

        await Comment.findByIdAndDelete(req.params.commentId);

        res.status(200).send({ msg: " comment deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "error" }] });
    }
});
//get comment
router.get("/getcomment/:id", async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id }).populate(
            "userId"
        );
        res.status(200).send({ comment });
    } catch (error) {
        console.log(error);
    }
});
//get comments
router.get("/getcomments/:id", async (req, res) => {
    try {
        const comment = await Comment.find({ _id: req.params.id }).populate(
            "userId "
        );
        res.status(200).send({ comments });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
