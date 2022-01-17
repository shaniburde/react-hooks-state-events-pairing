
import Comment from './Comment';

function CommentList({ comments }) {

    const commentList = comments.map((comment) => (
        <Comment
            key={comment.id}
            user={comment.user}
            comment={comment.comment}
        />
    ))

    return (
    <>
        <h2>{comments.length} Comments</h2>
        <div className="comments">{commentList}</div>
    </>
    )
}

export default CommentList;