import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {NextUIProvider} from "@nextui-org/react";
import starshipActions from '../redux/actions/starshipActions';
import {CircularProgress} from "@nextui-org/react";

const StarshipDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const starship = useSelector((state) => state.starships.starship)
  console.log(starship)

  useEffect(() => {
    const fetchingData = async () => {
      try {
        setIsLoading(true);
          dispatch(starshipActions.renderStarshipDetail(id));
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchingData();
  }, [id]);

  if (!starship) {
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
