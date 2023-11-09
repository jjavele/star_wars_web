import React from 'react'
import { Link as Anchor } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[15vh] border-b-[0.5px] border-[#FFF] ">
      <Anchor to="/" className="flex justify-center items-center w-full h-[10vh] text-[#fff]  bg-black">
        <img className="h-[9vh] hover:opacity-30" src="/src/assets/images/nav-logo.png" alt="nav-logo" />
      </Anchor>
      <div className="flex justify-center items-center w-full h-[5vh] bg-gray-900">
        <div className="flex px-4 font-bold text-[#fff]">
            <Anchor to={`/characters/${1}`}> 
              <p className="px-4 hover:font-bold hover:border-[#FFE81F] hover:text-[#FFE81F] hover:border p-1">Characters</p>
            </Anchor>
            <Anchor to={`/planets/${1}`}>
              <p className="px-4 hover:font-bold hover:border-[#FFE81F] hover:text-[#FFE81F]  hover:border p-1">Planets</p>
            </Anchor>
            <Anchor to={`/starships/${1}`}>
              <p className="px-4 hover:font-bold hover:border-[#FFE81F] hover:text-[#FFE81F]  hover:border p-1">Starships</p>
            </Anchor>
          </div>
      </div>
    </div>
  )
}
