import axios from "axios";
export const apiURL = "https://swapi.dev/api";
export const api = axios.create({ baseUrl: apiURL });

export const endpoints = {
    read_characters: "/people",
    read_planets: "/planets",
    read_starships: "/starships",
}