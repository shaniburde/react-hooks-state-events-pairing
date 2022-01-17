import React from 'react';
import Video from './Video';
import HideComments from './HideComments';
import video from "../data/video.js";

function App() {
  

  return (
  <div style={{contentStyle: 'text-align:center'}}>
    <Video video={video}/>
    <br></br>
    <HideComments comments={video.comments} />
  </div>
  )
}

export default App;
