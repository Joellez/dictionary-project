import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
    
  return (
    <span className="Phonetic">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-5">
          <div className="audio-player">
            <ReactAudioPlayer
              src={props.phonetic.audio}
              autoPlay={false}
              controls
            />
          </div>
        </div>
        <div className="col-3">
          <div className="test">{props.phonetic.text} </div>
        </div>
      </div>
    </span>
  );
}
