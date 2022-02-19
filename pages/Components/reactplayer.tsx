
import React from 'react'
import ReactPlayer from 'react-player'
import Fishing from './fishing1.mp4';
  
export default function VideoPlayer(){
  return (
    <div>
      <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
      <ReactPlayer url={Fishing} />
    </div>
  )
}