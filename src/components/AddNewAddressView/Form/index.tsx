import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import IAddressInfo from "../../../interfaces/IAddressInfo";
import { useDispatch } from "react-redux";
import { addNewAddress } from "../../../store/reducers/adresses";
import { v4 as uuidv4 } from 'uuid';
import InputSearchAddressAPI from "./InputSearchAddressAPI";

interface FormProps {
    planetType: string | null
    successfullySubmit: (value: boolean) => void
}

export default function Form({ planetType, successfullySubmit }: FormProps) {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState<IAddressInfo>({
        id: uuidv4(),
        typeAddress: "Casa",
        surnameAddress: "",
        address: "",
        planet: `${planetType}`,
        defaultAddress: false,
        isEditing: false
    })

    const [msgInvalidFormData, setMsgInvalidFormData] = useState<string>("")

    function onSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const defaultAddress = {
            id: uuidv4(),
            typeAddress: "",
            surnameAddress: "",
            address: "",
            planet: `${planetType}`,
            defaultAddress: false,
            isEditing: false
        }

        if (planetType === "marte") {
            const onlyNumbers = /^\d+$/
            if (onlyNumbers.test(formData.address)) {
                dispatch(addNewAddress(formData))
                setFormData(defaultAddress)
                successfullySubmit(true)
            } else {
                setMsgInvalidFormData("O endereço em Marte é composto por apenas 4 dígitos")
            }
        } else {
            dispatch(addNewAddress(formData))
            setFormData(defaultAddress)
            successfullySubmit(true)
        }
    }

    return (
        <form onSubmit={(e) => onSubmitForm(e)} style={{ width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                {planetType === "terra" ? (
                    <InputSearchAddressAPI addressValue={(value: string) => setFormData(item => {
                        item.address = value
                        return item
                    })} />
                ) : (
                    <>
                        <TextField
                            value={formData.address}
                            onChange={(e) => setFormData(item => ({ ...item, address: e.target.value }))}
                            label="Código do endereço"
                            placeholder="ex: 0073"
                            inputProps={{ maxLength: "4", minLength: "4" }}
                            required
                        />
                        {msgInvalidFormData.length > 0 && <Typography fontSize="small" color="red" component="span">{msgInvalidFormData}</Typography>}
                    </>
                )}

                <Typography sx={{ fontSize: "1rem" }} component="label">Tipo de endereço</Typography>
                <Select
                    value={formData.typeAddress}
                    onChange={(e) => setFormData(item => ({ ...item, typeAddress: e.target.value }))}
                    sx={{ height: "40px", width: "130px", mb: "20px" }} required>
                    <MenuItem value="Casa">Casa</MenuItem>
                    <MenuItem value="Trabalho">Trabalho</MenuItem>
                    <MenuItem value="Outro">Outro</MenuItem>
                </Select>

                <TextField
                    label="Apelido do endereço"
                    value={formData.surnameAddress}
                    onChange={(e) => setFormData(item => ({ ...item, surnameAddress: e.target.value }))}
                    placeholder="ex: Casa mãe"
                    required
                />

                <Button type="submit" sx={{ alignSelf: "end", width: "max-content" }} variant="contained">Salvar</Button>
            </Box>
        </form>
    )
}