
function Comment({ key, user, comment }) {

    return(
        <div key={key} className='comments'>
            <h3 className="user">{user}</h3>
            <p className="comment">{comment}</p>
        </div>
    )

}

export default Comment;