import { useState } from 'react';

function Buttons({ video }) {

    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)

    function handleUpVotes(e) {
        setUpvotes((upvotes) => upvotes + 1)
    }

    function handleDownVotes(e) {
        setDownvotes((downvotes) => downvotes - 1)
    }

    return(
    <div>
        <button onClick={handleUpVotes} value={upvotes}>{upvotes} 👍 </button>
        <button onClick={handleDownVotes} value={downvotes}>{downvotes} 👎 </button>
    </div>

    )
}

export default Buttons;