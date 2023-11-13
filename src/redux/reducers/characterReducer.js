import { createReducer } from "@reduxjs/toolkit";
import characterActions from "../actions/characterActions";

const { renderCharacters, renderSearchedCharacters, renderCharacterDetail } = characterActions;

const initialState = {
    characters: [],
    character: [],
};

const characterReducer = createReducer(initialState, (builder) => builder
    .addCase(renderCharacters.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            characters: action.payload,
        }
        console.log(newState)
        return newState
    })
    .addCase(renderSearchedCharacters.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            characters: action.payload,
        }
        console.log(newState)
        return newState
    })
    .addCase(renderCharacterDetail.fulfilled, (state, action)=>{
        console.log(action.payload)
        let newState = {
            ...state,
            character: action.payload,
        }
        console.log(newState)
        return newState
    })
)

export default characterReducer;