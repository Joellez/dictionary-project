import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css"

export default function Phonetic(props) {
    
  return (
    <span className="Phonetic">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-5">
          <div className="audio-player">
            <ReactAudioPlayer
              src={props.phonetic.audio}
              autoPlay={false}
              controls
            />
          </div>
        </div>
        <div className="col-lg-3 mt-lg-3 text">
         {props.phonetic.text}
        </div>
      </div>
    </span>
  );
}
