import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {
        id: 1,
        typeAddress: "Casa",
        surnameAddress: "Minha casa",
        phoneNumber: "(74) 99912-3456",
        address: "Brasil, São Paulo, Pinheiros, Rua Artur de Azevedo 225, Casa de esquina",
        planet: "terra",
        defaultAddress: false
    },
    {
        id: 2,
        typeAddress: "Depósito",
        surnameAddress: "Eletrônicos",
        phoneNumber: "(74) 99912-3456",
        address: "0047",
        planet: "marte",
        defaultAddress: true
    },
    {
        id: 3,
        typeAddress: "Depósito",
        surnameAddress: "Eletrônicos",
        phoneNumber: "(74) 99912-3456",
        address: "0047",
        planet: "marte",
        defaultAddress: false
    },
    {
        id: 4,
        typeAddress: "Casa",
        surnameAddress: "Minha casa",
        phoneNumber: "(74) 99912-3456",
        address: "Brasil, São Paulo, Pinheiros, Rua Artur de Azevedo 225, Casa de esquina",
        planet: "terra",
        defaultAddress: false
    }
]

const adressesSlice:any = createSlice({
    name: 'adresses',
    initialState,
    reducers: {
        updateDefaultAddress: (state, { payload }) => {
            let updatedState = state.map(item => ({ ...item }))
            updatedState.forEach(item => {
                item.id === payload ? item.defaultAddress = true : item.defaultAddress = false
            })
            return updatedState
        },
        deleteAddress: (state, { payload }) => {
            let cloneState = state.map(item => ({ ...item }))
            const updatedState = cloneState.filter(item => item.id !== payload)
            return updatedState
        }
    }
})

export const { updateDefaultAddress, deleteAddress } = adressesSlice.actions

export default adressesSlice.reducer