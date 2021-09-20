import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../Redux/actions/user";

function CommentCard({ comment }) {
    const user = useSelector((state) => state.userReducer.user);

    const token = localStorage.getItem("token");

    const dispatch = useDispatch();

    return (
        <div style={{ marginLeft: "350px" }}>
            <ul style={{ marginTop: "50px" }}>
                <li
                    style={{
                        display: "flex",
                        borderBottom: "solid 0.5px grey",
                        width: "650px",
                    }}
                >
                    <h5
                        style={{
                            width: "600px",
                            display: "flex",
                        }}
                    >
                        {token ? user.name : <h5>userName </h5>} :{comment.text}
                    </h5>

                    {token ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                            onClick={() => dispatch(deleteComment(comment._id))}
                            style={{
                                cursor: "pointer",
                                color: "#FF7F50",
                                marginLeft: "600px",
                                position: "absolute",
                            }}
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                                fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                        </svg>
                    ) : null}
                </li>
            </ul>
        </div>
    );
}

export default CommentCard;
