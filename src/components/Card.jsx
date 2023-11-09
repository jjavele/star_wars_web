import React from 'react'
import { Link as Anchor } from 'react-router-dom';

export default function Card({ imageSrc, name, defaultImage }) {

    const handleImageError = (e) => {
        e.preventDefault();
        e.target.src = defaultImage
    }

    return (
            <div className="flex flex-col justify-between bg-[#FFE81F] overflow-hidden shadow-2xl mx-2 my-2 border-black border-[1px] hover:opacity-60 hover:cursor-pointer">
                <img className="flex object-contain h-[40vh] " src={imageSrc} alt={name} onError={handleImageError}/>
                <div className="flex justify-between pt-2 mb-2">
                    <p className="font-bold text-xl mb-2 ps-2">{name}</p>
                </div>
            </div>
    )
}
