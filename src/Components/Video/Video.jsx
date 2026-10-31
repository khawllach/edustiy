import React, { useRef } from 'react'
import './Video.css'
import video_college from '../../assets/video-college.mp4'

const Video = ({playVideo, setPlayVideo}) => {

    const player = useRef(null);
    const closeVideo = (e) => {
        if(e.target === player.current){
            setPlayVideo(false);
        }
    }

  return (
    <div className={`video-player ${playVideo ? '' : 'hide'}`} ref={player} onClick={closeVideo}>
      <video src={video_college} autoPlay muted controls></video>
    </div>
  )
}

export default Video
