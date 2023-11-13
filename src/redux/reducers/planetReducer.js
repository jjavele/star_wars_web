import { createReducer } from "@reduxjs/toolkit";
import planetActions from "../actions/planetActions";

const { renderPlanets, renderSearchedPlanets, renderPlanetDetail } = planetActions;

const initialState = {
    planets: [],
};

const planetReducer = createReducer(initialState, (builder) => builder
    .addCase(renderPlanets.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            planets: action.payload,
        }
        console.log(newState)
        return newState
    })
    .addCase(renderSearchedPlanets.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            planets: action.payload,
        }
        console.log(newState)
        return newState
    })
    .addCase(renderPlanetDetail.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            planet: action.payload,
        }
        console.log(newState)
        return newState
    })
)

export default planetReducer;