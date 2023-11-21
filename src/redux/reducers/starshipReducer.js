import { createReducer } from "@reduxjs/toolkit";
import starshipActions from "../actions/starshipActions";

const { renderStarships, renderSearchedStarships, renderStarshipDetail } = starshipActions;

const initialState = {
    starships: [],
};

const starshipReducer = createReducer(initialState, (builder) => builder
    .addCase(renderStarships.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            starships: action.payload,
        }
        console.log(newState)
        return newState
    })
    .addCase(renderSearchedStarships.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            starships: action.payload,
        }
        console.log(newState)
        return newState
    })
    .addCase(renderStarshipDetail.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            starship: action.payload,
        }
        console.log(newState)
        return newState
    })
)

export default starshipReducer;