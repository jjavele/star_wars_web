import { createAsyncThunk } from "@reduxjs/toolkit"
import {api, apiURL, endpoints } from "../../utils/api";

const renderPlanets = createAsyncThunk('renderPlanets', async(count) => {
        console.log(count)
        try {
            let { data } = await api.get(apiURL + endpoints.read_planets + `/?page=${count}`)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            return null
        }
})

const renderSearchedPlanets = createAsyncThunk("renderSearchedPlanets", async (searchTerm) => {
    try {
        let { data } = await api.get(apiURL + endpoints.read_planets + `/?search=${searchTerm}`)
        console.log(data);
        return data         
    } catch (error) {
        console.log(error);
        return null;        
    }
})

const renderPlanetDetail = createAsyncThunk("planetDetail", async (id) => {
    try {
        let { data } = await api.get(apiURL + endpoints.read_planets + `/${id}`)
        console.log(data);
        return data         
    } catch (error) {
        console.log(error);
        return null;        
    }
})

const planetActions = { renderPlanets, renderSearchedPlanets, renderPlanetDetail }
export default planetActions