import React from "react";

export default function Phonetic(props) {
    function playAudio(){

    }
    
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fa-solid fa-volume-high" title="Listen" onClick={playAudio}></i>
      </a> {props.phonetic.text}
    </div>
  );
}
