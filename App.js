import React from "react";
import playFile from "./playFile";

function App() {
  return (
    <>
    <h1>Drop your file here...</h1>

    <input type="file" placeholder="Choose your file" id="file" 
    accept="video/mp4,audio/*" multiple 
    onChange ={
         function playFile(){
             var musicFile = document.getElementById("file").files[0];
             if(musicFile.type === "video/mp4")
              {
                var musicPlayer = document.getElementById("video");
              musicPlayer.src = URL.createObjectURL(musicFile);
              }
            else
              {
                var musicPlayer = document.getElementById("audio");
                musicPlayer.src = URL.createObjectURL(musicFile);
              }
              }
                } />
                <audio id="audio" controls></audio>
  <video width="500" height="250" id="video" controls />  
  

    </>
  )
}
export default App;