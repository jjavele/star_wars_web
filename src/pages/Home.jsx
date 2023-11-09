import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link as Anchor } from "react-router-dom"

export default function Home() {

  return (
    <div className="flex flex-col w-full justify-around items-center bg-[url('/src/assets/images/background.jpg')] bg-cover pt-4">
        <div className="flex justify-center items-center h-[20vh]">
            <video controls loop autoPlay className="h-[20vh] w-[90vw] object-cover bg-repeat" src={"/src/assets/videos/video-landing-page.mp4"}></video>
        </div>
        <h2 className="flex items-center text-[#FFE81F] text-2xl text-bold h-[8vh] align-center text-center">¡Explore your favorite Categories!</h2>
        <div className="flex flex-col lg:flex-row w-[90vw] min-h-[55vh] justify-between items-center">
            <Anchor to={`/characters/${1}`}>
                <img className="h-[50vh] lg:w-[26vw] hover:scale-110 object-contain py-2" src="/src/assets/images/characters-image.png" alt="-character-image" />
            </Anchor>
            <Anchor to={`/planets/${1}`}>
                <img className="h-[50vh] lg:w-[26vw] hover:scale-110 object-contain py-2" src="/src/assets/images/planets-image.png" alt="planets-image" />
            </Anchor>
            <Anchor to={`/planets/${1}`}>
                <img className="h-[50vh] lg:w-[26vw] hover:scale-110 object-contain py-2" src="/src/assets/images/starships-image.png" alt="starships-image" />
            </Anchor>      
        </div>
    </div>
  );
}
