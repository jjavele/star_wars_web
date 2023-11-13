import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux';
import planetActions from '../redux/actions/planetActions';
import {NextUIProvider} from "@nextui-org/react";
import {CircularProgress} from "@nextui-org/react";

export default function Planets() {
  const [count, setCount] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const planets = useSelector((state) => state.planets.planets.results)
  console.log(planets)

  // GETTING PLANETS RESULTS:

  useEffect(() => {
    const fetchingData = async () => {
      try {
        setIsLoading(true);
        if (searchTerm.length > 0) {
          await dispatch(planetActions.renderSearchedPlanets(searchTerm));
        } else {
          await dispatch(planetActions.renderPlanets(count));
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchingData();
  }, [searchTerm, count]);

  const handleNextPage = () => {
    setCount((previousCount) => previousCount + 1);
    setSearchPage((previousPage) => previousPage + 1);
    navigate(`/planets/${count + 1}`);
  };

  const handlePreviousPage = () => {
    if (count > 1) {
      setCount((previousCount) => previousCount - 1);
      setSearchPage((previousPage) => previousPage - 1);
      navigate(`/planets/${count - 1}`);
    }
  };

  return (
    <NextUIProvider>
      <div className="flex flex-wrap w-full min-h-[85vh] justify-center items-center bg-[url('/src/assets/images/background.jpg')] bg-cover">
        <div className="flex flex-col md:flex-row h-[15vh] md:h-[10vh] justify-center items-center md:justify-between w-[85vw] self-start">
          <div className="flex w-[85vw] items-center h-[10vh]">
            <input className="flex w-[80vw] sm:w-[50vw] lg:w-[30vw] h-[4vh] px-2 ps-10 border-2 border-[#FFE81F] bg-[url('/src/assets/images/search.png')] bg-no-repeat bg-left" type="search" placeholder="Search here" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>
          <div className="flex items-center h-[10vh]">
            <button onClick={handlePreviousPage} className="text-white px-2 h-[5vh]">
              <svg className="h-[5vh] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" fill="#FFF" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <p className="text-black font-bold px-3 bg-[#FFF] rounded p-1">{count}</p>
            <button onClick={handleNextPage} className="text-white px-2">
              <svg className="h-[5vh] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" fill="#FFF" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between w-[85vw]">
          {isLoading &&
          <div className="flex w-full min-h-[85vh] justify-center items-center">
            <CircularProgress classNames={{
            svg: "w-28 h-28 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
            }} aria-label="Loading" size="lg" label="Loading..." /></div>}
            {!isLoading && planets?.map((planet, index) => {
              const planetId = planet?.url?.match(/\/(\d+)\/$/)[1];
              const imageSrc = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;
              return (
                <Anchor key={index} to={`/planet/${planetId}`}>
                  <Card key={index} imageSrc={imageSrc} name={planet?.name} planetId={planetId} defaultImage={"/src/assets/images/default-planets-image.png"} />
                </Anchor>
              );
            })}
        </div>
      </div>
    </NextUIProvider>
  )
}
