import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link as Anchor } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {NextUIProvider} from "@nextui-org/react";
import planetActions from '../redux/actions/planetActions';
import {CircularProgress} from "@nextui-org/react";

const PlanetDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const planet = useSelector((state) => state.planets.planet)
  console.log(planet)

  useEffect(() => {
    const fetchingData = async () => {
      try {
        setIsLoading(true);
          await dispatch(planetActions.renderPlanetDetail(id));
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchingData();
  }, [id]);

  const extractResidentId = (residentUrl) => {
    const matches = residentUrl.match(/\/(\d+)\/$/);
    return matches ? matches[1] : '';
  };

  if (!planet) {
    return <NextUIProvider>
    {isLoading &&
    <div className="flex w-full min-h-[85vh] justify-center items-center">
      <CircularProgress classNames={{
      svg: "w-28 h-28 drop-shadow-md",
      indicator: "stroke-white",
      track: "stroke-white/10",
      value: "text-3xl font-semibold text-white",
      }} aria-label="Loading" size="lg" label="Loading..." /></div>}
      </NextUIProvider>
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
