import { createAsyncThunk } from "@reduxjs/toolkit"
import {api, apiURL, endpoints } from "../../utils/api";

const renderStarships = createAsyncThunk('renderStarships', async(count) => {
        console.log(count)
        try {
            let { data } = await api.get(apiURL + endpoints.read_starships + `/?page=${count}`)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            return null
        }
})

const renderSearchedStarships = createAsyncThunk("renderSearchedStarships", async (searchTerm) => {
    try {
        let { data } = await api.get(apiURL + endpoints.read_starships + `/?search=${searchTerm}`)
        console.log(data);
        return data         
    } catch (error) {
        console.log(error);
        return null;        
    }
})

const renderStarshipDetail = createAsyncThunk("renderStarshipDetail", async (id) => {
    try {
        let { data } = await api.get(apiURL + endpoints.read_starships + `/${id}`)
        console.log(data);
        return data         
    } catch (error) {
        console.log(error);
        return null;        
    }
})

const starshipActions = { renderStarships, renderSearchedStarships, renderStarshipDetail }
export default starshipActions