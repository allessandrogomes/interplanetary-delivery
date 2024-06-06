import { Box, Button, Modal, Paper, Radio, Typography } from "@mui/material";
import IAddressInfo from "../../../interfaces/IAddressInfo";
import PlanetIcon from "./PlanetIcon";
import TypeAddress from "./TypeAddress";
import SurnameAddress from "./SurnameAddress";
import Address from "./Address";
import { useDispatch } from "react-redux";
import { deleteAddress, setEditing } from "../../../store/reducers/adresses";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IAddressInfoWithClickedCard extends IAddressInfo {
    onAddressClick: (id: string) => void,
    selectedId: string,
}

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "210px", sm: 400 },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CardAddress({ typeAddress, surnameAddress, address, planet, id, onAddressClick, selectedId, defaultAddress }: IAddressInfoWithClickedCard) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)

    function verifySelectedAddress(): boolean {
        return selectedId === id ? true : false
    }

    const isSelectedAddress = verifySelectedAddress()

    function resolveEditProcess() {
        dispatch(setEditing(id))
        navigate("/address-edit")
    }

    return (
        <Box onClick={() => onAddressClick(id)} sx={{ position: "relative", cursor: "pointer", background: "transparent", border: `${isSelectedAddress ? "1px solid #00BCD4" : "none"}`, width: { xs: "87%", sm: "95%" }, minHeight: "150px", display: "flex", alignItems: "center", p: "10px" }} component={Paper}>
            
            <Radio checked={isSelectedAddress} sx={{ position: "absolute", right: "0", top: "0" }} />

            <Box sx={{ display: "flex", position: "relative", gap: "10px", height: "100%" }}>
                <PlanetIcon icon={planet === "terra" ? "earth-icon.svg" : "mars-icon.svg"} displayIcon={{xs: "none", sm: "inherit"}}/>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <Box sx={{ display: "flex", gap: "5px" }}>
                        <TypeAddress bgColor="#CDE8E5" typeAddress={typeAddress} />
                        <TypeAddress bgColor={planet === "terra" ? "#4EAE4D" : "#E7413E"} typeAddress={planet.toUpperCase()} />
                        {defaultAddress ? (
                            <Typography sx={{ fontSize: "14px", fontWeight: "bold", p: "0 4px", backgroundColor: "#00BCD4", borderRadius: "5px" }} component="span">Padrão</Typography>

                        ) : ""}
                    </Box>
                    <SurnameAddress surnameAddress={surnameAddress} />
                    <Address address={address} />
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Button onClick={resolveEditProcess} sx={{ fontSize: "10px", p: "5px 10px", textTransform: "initial" }} variant="contained">Editar endereço</Button>
                        <Button onClick={() => setIsOpenModalDelete(true)} sx={{ fontSize: "10px", p: "5px 10px", textTransform: "initial" }} variant="contained" color="error">Deletar endereço</Button>
                    </Box>
                </Box>
            </Box>

            <Modal
                open={isOpenModalDelete}
                onClose={() => setIsOpenModalDelete(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirme para excluir o endereço:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: "20px" }}>
                        {planet.toUpperCase()}: {address}
                    </Typography>
                    <Button onClick={() => setIsOpenModalDelete(false)} sx={{ mr: "10px" }} variant="outlined">Cancelar</Button>
                    <Button onClick={() => { dispatch(deleteAddress(id)), setIsOpenModalDelete(false) }} variant="contained" color="error">Excluir</Button>
                </Box>
            </Modal>
        </Box>
    )
}