import { Box, Button, Paper, Radio, Typography } from "@mui/material";
import IAddressInfo from "../../../interfaces/IAddressInfo";
import PlanetIcon from "./PlanetIcon";
import TypeAddress from "./TypeAddress";
import SurnameAddress from "./SurnameAddress";
import PhoneNumber from "./PhoneNumber";
import Address from "./Address";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../../store/reducers/adresses";

interface IAddressInfoWithClickedCard extends IAddressInfo {
    onAddressClick: (id: number) => void,
    selectedId: number,
}

export default function CardAddress({ typeAddress, surnameAddress, phoneNumber, address, planet, id, onAddressClick, selectedId, defaultAddress }: IAddressInfoWithClickedCard) {

    const dispatch = useDispatch()

    function verifySelectedAddress(): boolean {
        return selectedId === id ? true : false
    }

    const isSelectedAddress = verifySelectedAddress()

    return (
        <Box onClick={() => onAddressClick(id)} sx={{ position: "relative", cursor: "pointer", background: "transparent", border: `${isSelectedAddress ? "1px solid #00BCD4" : "none"}`, width: "95%", minHeight: "150px", display: "flex", alignItems: "center", p: "10px" }} component={Paper}>
            <Radio checked={isSelectedAddress} sx={{ position: "absolute", right: "0", top: "0" }} />
            <Box sx={{ display: "flex", position: "relative", gap: "10px" }}>
                <PlanetIcon icon={planet === "terra" ? "earth-icon.svg" : "mars-icon.svg"} />
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <Box sx={{ display: "flex", gap: "5px" }}>
                        <TypeAddress typeAddress={typeAddress} />
                        <TypeAddress typeAddress={planet.toUpperCase()} />
                        {defaultAddress ? (
                            <Typography sx={{ fontSize: "14px", fontWeight: "bold", p: "0 4px", backgroundColor: "#00BCD4", borderRadius: "5px" }} component="span">Padrão</Typography>

                        ) : ""}
                    </Box>
                    <SurnameAddress surnameAddress={surnameAddress} />
                    <PhoneNumber phoneNumber={phoneNumber} />
                    <Address address={address} />
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Button sx={{ fontSize: "10px", p: "5px 10px", textTransform: "initial" }} variant="contained">Editar endereço</Button>
                        <Button onClick={() => dispatch(deleteAddress(id))} sx={{ fontSize: "10px", p: "5px 10px", textTransform: "initial" }} variant="contained" color="error">Deletar endereço</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}