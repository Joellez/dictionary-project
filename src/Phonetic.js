import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
    
  return (
    <div className="Phonetic">
        <div className="audio-player">
          <ReactAudioPlayer
            src={props.phonetic.audio}
            autoPlay={false}
            controls
          />
          </div>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fa-solid fa-volume-high" title="Listen"></i>
      </a> {props.phonetic.text}
    </div>
  );
}
