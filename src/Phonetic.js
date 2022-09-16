import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
    
  return (
    <span className="Phonetic">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-5">
          <div className="audio-player">
            <ReactAudioPlayer
              src={props.phonetic.audio}
              autoPlay={false}
              controls
            />
          </div>
        </div>
        <div className="col-md-3 mt-md-3">
         {props.phonetic.text}
        </div>
      </div>
    </span>
  );
}
