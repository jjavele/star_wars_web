import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StarshipDetail = () => {
  const [starship, setStarship] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://swapi.dev/api/starships/${id}/`)
      .then((res) => setStarship(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!starship) {
    return <div className="text-[#FFF] text-xl flex flex-wrap w-full min-h-[85vh] justify-center items-center bg-[url('/src/assets/images/background.jpg')] bg-cover">Cargando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[url('/src/assets/images/background.jpg')] bg-cover min-h-[85vh] px-6 py-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img className="rounded-full border-4 border-[#FFE81F] hover:opacity-60 hover:cursor-pointer hover:scale-105 h-[50vh] object-cover" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />
        <h2 className="text-4xl font-bold my-4 text-gray-800">{starship?.name}</h2>
        <div className="flex flex-col items-start space-y-1">
          <p className="capitalize"><span className="font-bold capitalize">Name:</span> {starship?.name}</p>
          <p className="capitalize"><span className="font-bold capitalize">Model:</span> {starship?.model}</p>
          <p className="capitalize"><span className="font-bold capitalize">Length:</span> {starship?.length}</p>
          <p className="capitalize"><span className="font-bold capitalize">Passengers:</span> {starship?.passengers}</p>
          <p className="capitalize"><span className="font-bold capitalize">Cargo Capacity:</span> {starship?.cargo_capacity}</p>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetail;