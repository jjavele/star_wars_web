import { createReducer } from "@reduxjs/toolkit";
import filterAction from "../actions/filterAction";

const { datos_filter } = filterAction;

const initialState = {
    filter: null,
};

const filterReducer = createReducer(initialState,
    (builder) => builder
    .addCase(datos_filter,
        (state, action) => {
            console.log(action.payload)
            let newState = {
                ...state,
                filter: action.payload,
            }
            return newState
        }
    )
)

export default filterReducer;