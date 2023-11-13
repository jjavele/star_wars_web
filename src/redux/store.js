import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducers/characterReducer";
import planetReducer from "./reducers/planetReducer";
import starshipReducer from "./reducers/starshipReducer";

export const store = configureStore ({
    reducer: {
        characters: characterReducer,
        planets: planetReducer,
        starships: starshipReducer,
    }
})