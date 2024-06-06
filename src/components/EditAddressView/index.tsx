import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import InputSearchAddressAPI from "../AddNewAddressView/Form/InputSearchAddressAPI";
import { useEffect, useState } from "react";
import IAddressInfo from "../../interfaces/IAddressInfo";
import { useDispatch } from "react-redux";
import { editAddress } from "../../store/reducers/adresses";
import { useNavigate } from "react-router-dom";

interface EditAddressViewProps {
    addressToEdit: IAddressInfo
}

export default function EditAddressView({ addressToEdit }: EditAddressViewProps) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [addressEdited, setAddressEdited] = useState<IAddressInfo>(addressToEdit)
    const [successfullySubmit, setSuccessfullySubmit] = useState<boolean>(false)
    const [msgInvalidSubmit, setMsgInvalidSubmit] = useState<string>("")

    function submitEdit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (addressToEdit.planet === "marte") {
            const onlyNumbers = /^\d+$/
            if (onlyNumbers.test(addressEdited.address)) {
                dispatch(editAddress(addressEdited))
                setSuccessfullySubmit(true)
            } else {
                setMsgInvalidSubmit("O endereço em Marte é composto por apenas 4 dígitos")
            }
        } else {
            dispatch(editAddress(addressEdited))
            setSuccessfullySubmit(true)
        }
    }

    useEffect(() => {
        setAddressEdited(prevAddress => ({ ...prevAddress, isEditing: false }))
    }, [])

    return (
        <>
            {!successfullySubmit ? (
                <form onSubmit={(e) => submitEdit(e)} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "80%" }}>
                        {
                            addressToEdit.planet === "terra" ? (
                                <>
                                    <Typography component="span">Endereço atual: <Typography component="span" fontWeight="bold">{addressToEdit.address}</Typography></Typography>
                                    <InputSearchAddressAPI addressValue={(value: string) => setAddressEdited(item => ({ ...item, address: value }))} />
                                </>
                            ) : (
                                <>
                                    <TextField
                                        value={addressEdited.address}
                                        onChange={(e) => setAddressEdited(item => ({ ...item, address: e.target.value }))}
                                        label="Código do endereço"
                                        placeholder="ex: 0073"
                                        inputProps={{ maxLength: "4", minLength: "4" }}
                                        required
                                    />
                                    {msgInvalidSubmit.length > 0 && <Typography fontSize="small" color="red" component="span">{msgInvalidSubmit}</Typography>}

                                </>
                            )
                        }

                        <Typography sx={{ fontSize: "1rem" }} component="label">Tipo de endereço</Typography>
                        <Select
                            value={addressEdited.typeAddress}
                            onChange={(e) => setAddressEdited(item => ({ ...item, typeAddress: e.target.value }))}
                            sx={{ height: "40px", width: "130px", mb: "20px" }} required>
                            <MenuItem value="Casa">Casa</MenuItem>
                            <MenuItem value="Trabalho">Trabalho</MenuItem>
                            <MenuItem value="Outro">Outro</MenuItem>
                        </Select>

                        <TextField
                            label="Apelido do endereço"
                            value={addressEdited.surnameAddress}
                            onChange={(e) => setAddressEdited(item => ({ ...item, surnameAddress: e.target.value }))}
                            placeholder="ex: Casa mãe"
                            required
                        />

                        <Box sx={{ alignSelf: "end", mt: "50px", display: "flex", gap: "10px" }}>
                            <Button onClick={() => navigate("/")} variant="outlined">Cancelar</Button>
                            <Button type="submit" variant="contained">Salvar</Button>
                        </Box>
                    </Box>
                </form>
            ) : (
                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", maxWidth: "80%" }}>
                    <Typography>Endereço atualizado com sucesso!</Typography>
                    <Button onClick={() => navigate("/")} sx={{ width: "max-content" }} variant="contained">Área de endereços</Button>
                </Box>
            )}
        </>
    )
}