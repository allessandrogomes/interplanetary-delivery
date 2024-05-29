import { configureStore } from "@reduxjs/toolkit"
import adressesSlice from "./reducers/adresses"


const store = configureStore({
    reducer: {
        adresses: adressesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store