import Buttons from './Buttons';

function Video({ video }) {

    return(
    <div className="Video">
      <iframe
        width="919"
        height="525"
        align="center"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1 style={{align: "center"}}>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      
      <Buttons video={video}/> 
    </div>
    )
    
}

export default Video;