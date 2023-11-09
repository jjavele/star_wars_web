import { createAction } from "@reduxjs/toolkit"

const datos_filter = createAction(
    'datos_filter',
    (filter) => {
        console.log(filter)
        return {
            payload: filter
        }
    }
)

const filterActions = { datos_filter }
export default filterActions