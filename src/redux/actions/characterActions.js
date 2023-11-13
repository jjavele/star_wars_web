import { createAsyncThunk } from "@reduxjs/toolkit"
import {api, apiURL, endpoints } from "../../utils/api";

const renderCharacters = createAsyncThunk('renderCharacters', async(count) => {
        console.log(count)
        try {
            let { data } = await api.get(apiURL + endpoints.read_characters + `/?page=${count}`)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            return null
        }
})

const renderSearchedCharacters = createAsyncThunk("renderSearchedCharacters", async (searchTerm) => {
    try {
        let { data } = await api.get(apiURL + endpoints.read_characters + `/?search=${searchTerm}`)
        console.log(data);
        return data         
    } catch (error) {
        console.log(error);
        return null;        
    }
})

const renderCharacterDetail = createAsyncThunk("characterDetail", async (id) => {
    try {
        let { data } = await api.get(apiURL + endpoints.read_characters + `/${id}`)
        console.log(data);
        return data         
    } catch (error) {
        console.log(error);
        return null;        
    }
})

const characterActions = { renderCharacters, renderSearchedCharacters, renderCharacterDetail }
export default characterActions

/*
useEffect(() => {
    api(apiURL + endpoints.read_characters + `/${id}/`)
      .then((res) => setCharacter(res.data))
      .catch((error) => console.log(error));
  }, [id]);
  */