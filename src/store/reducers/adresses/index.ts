import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'

const initialState = [
    {
        id: uuidv4(),
        typeAddress: "Casa",
        surnameAddress: "Minha casa",
        address: "Brasil, São Paulo, Pinheiros, Rua Artur de Azevedo 225",
        planet: "terra",
        defaultAddress: false,
        isEditing: false
    },
    {
        id: uuidv4(),
        typeAddress: "Outro",
        surnameAddress: "Eletrônicos",
        address: "0047",
        planet: "marte",
        defaultAddress: true,
        isEditing: false
    },
    {
        id: uuidv4(),
        typeAddress: "Trabalho",
        surnameAddress: "Placas de vídeo",
        address: "2842",
        planet: "marte",
        defaultAddress: false,
        isEditing: false
    },
    {
        id: uuidv4(),
        typeAddress: "Casa",
        surnameAddress: "Casa mãe",
        address: "Rio de Janeiro, Panamericana, Chihuahua, Chih., Mexico",
        planet: "terra",
        defaultAddress: false,
        isEditing: false
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
            const updatedState = state.filter(item => item.id !== payload)
            return updatedState
        },
        addNewAddress: (state, { payload }) => {
            let cloneState = state.map(item => ({ ...item }))
            cloneState.push(payload)
            return cloneState
        },
        setEditing: (state, { payload }) => {
            let cloneState = state.map(item => ({ ...item }))
            cloneState.forEach(item => {
                item.id !== payload ? item.isEditing = false : item.isEditing = true
            })
            return cloneState
        }, 
        editAddress: (state, { payload }) => {
            let updatedState = state.filter(item => item.id !== payload.id)
            updatedState.push(payload)
            return updatedState
        }
    }
})

export const { updateDefaultAddress, deleteAddress, addNewAddress, setEditing, editAddress } = adressesSlice.actions

export default adressesSlice.reducer