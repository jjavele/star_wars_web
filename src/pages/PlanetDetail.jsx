import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link as Anchor } from 'react-router-dom';


const PlanetDetail = () => {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://swapi.dev/api/planets/${id}/`)
      .then((res) => setPlanet(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const extractResidentId = (residentUrl) => {
    const matches = residentUrl.match(/\/(\d+)\/$/);
    return matches ? matches[1] : '';
  };

  if (!planet) {
    return <div className="text-[#FFF] text-xl flex flex-wrap w-full min-h-[85vh] justify-center items-center bg-[url('/src/assets/images/background.jpg')] bg-cover">Cargando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[url('/src/assets/images/background.jpg')] bg-cover min-h-[85vh] px-6 py-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img className="rounded-full border-4 border-[#FFE81F] hover:opacity-60 hover:cursor-pointer hover:scale-105 h-[50vh] object-cover" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <h2 className="text-4xl font-bold my-4 text-gray-800">{planet?.name}</h2>
        <div className="flex flex-col items-start space-y-1">
          <p className="capitalize"><span className="font-bold capitalize">Diamenter:</span> {planet?.diameter}</p>
          <p className="capitalize"><span className="font-bold capitalize">Climate:</span> {planet?.climate}</p>
          <p className="capitalize"><span className="font-bold capitalize">Gravity:</span> {planet?.gravity}</p>
          <p className="capitalize"><span className="font-bold capitalize">Terrain:</span> {planet?.terrain}</p>
          <p className="capitalize"><span className="font-bold capitalize">Population:</span> {planet?.population}</p>
          <p className="capitalize"><span className="font-bold capitalize">Residents:</span> {planet?.residents.length > 0 ? (
            <ul>
              {planet.residents.map((resident, index) => (
                <li key={index}>
                  <Anchor to={`/character/${extractResidentId(resident)}`}>{resident}</Anchor>
                </li>
              ))}
            </ul>
          ) : (
            <p>No residents founded</p>
          )}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
