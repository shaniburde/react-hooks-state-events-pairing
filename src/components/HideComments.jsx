import { useState } from 'react';
import CommentList from "./CommentList";

function HideComments({ comments }) {
    const [hideComments, setHideComments] = useState(false);

    function handleHideComments() {
        setHideComments(hideComments => !hideComments)
    }

    return(
    <div>
        <button onClick={handleHideComments}>{hideComments ? "Hide Comments" : "Show Comments"}</button>
        <div>{hideComments ? <CommentList comments={comments} /> : null}</div>
    </div>
    )
}
export default HideComments;