import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CommentCard from "./CommentCard";

function CommentsList() {
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();

    let itemsToRender;
    if (user.comments) {
        itemsToRender = user.comments.map((comment) => {
            return <CommentCard key={comment._id} comment={comment} />;
        });
    } else {
        itemsToRender = "Loading...";
    }
    return <div>{itemsToRender}</div>;
}

export default CommentsList;
