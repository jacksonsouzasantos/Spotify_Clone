/* eslint-disable jsx-a11y/alt-text */
import React from 'react';


export default function TrackSearchResult({track, choosetrack}){
    function handleplay(){
    choosetrack(track)
    }
return (
    
    <div 
    classeName="d-flex m-2 align-intems-center"
    style={{cursor: "poiter"}}
    onClick={handleplay}
    
    >
   

    <img src={track.albumUrl} style={{height: '64px', width: '64px'}} />
   
   <div claseName="ml-3">

   <dv>{track.title}</dv>
   <div classeName="text-muded">{track.artist}</div>
   </div>
    </div>
)
}