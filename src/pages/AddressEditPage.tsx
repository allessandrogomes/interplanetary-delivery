import { useSelector } from "react-redux"
import IAddressInfo from "../interfaces/IAddressInfo"
import { useEffect, useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import BoxPaper from "../components/shared/BoxPaper"
import { useNavigate } from "react-router-dom"
import EditAddressView from "../components/EditAddressView"

interface AddressEditPageProps {

}

export default function AddressEditPage({ }: AddressEditPageProps) {

    const navigate = useNavigate()

    const adresses: any = useSelector<any>(state => state.adresses)
    const [addressToEdit, setAddressToEdit] = useState<IAddressInfo | null>(null)

    useEffect(() => {
        adresses.forEach((item: IAddressInfo) => {
            item.isEditing === true ? setAddressToEdit(item) : ""
        })
    }, [])

    return (
        <BoxPaper>
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", position: "absolute", top: "30px", left: "50px" }}>Editar endereço</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%", position: "relative", alignItems: "center" }}>
                {addressToEdit !== null ? (
                    <EditAddressView addressToEdit={addressToEdit} />
                ) : (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", maxWidth: "80%" }}>
                        <Typography>Para editar um endereço é preciso retornar a área de endereços e clicar em "Editar endereço".</Typography>
                        <Button onClick={() => navigate("/")} sx={{ width: "max-content" }} variant="contained">Área de endereços</Button>
                    </Box>
                )
                }
            </Box>
        </BoxPaper >
    )
}