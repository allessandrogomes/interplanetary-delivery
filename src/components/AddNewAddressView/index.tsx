import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SelectPlanet from "./SelectPlanet";
import Form from "./Form";

interface AddNewAddressViewProps {
    backView: React.MouseEventHandler<SVGSVGElement | HTMLButtonElement>
}

export default function AddNewAddressView({ backView }: AddNewAddressViewProps) {

    const [planetType, setPlanetType] = useState<string | null>(null)
    const [successfullySubmit, setSuccessfullySubmit] = useState<boolean>(false)

    return (
        <>
            {!successfullySubmit ? (
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%", position: "relative" }}>
                    <ArrowBackIosIcon onClick={(e) => backView(e)} sx={{ position: "absolute", left: "0", top: "6px", cursor: "pointer" }} />
                    <Typography sx={{ alignSelf: "start", fontSize: "1.5rem", fontWeight: "bold", ml: "40px" }} component="h1">Adicionar novo endereço</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "90%", alignItems: "center", position: `${planetType === null ? "absolute" : "none"}`, top: "40%" }}>
                        <Typography mb="10px" fontWeight="bold">{planetType === null ? "Selecione o planeta" : "Planeta selecionado"}</Typography>
                        <SelectPlanet planetType={planetType} clickEarth={() => setPlanetType("terra")} clickMars={() => setPlanetType("marte")} clickChangePlanet={() => setPlanetType(null)} />
                        {planetType !== null && <Form planetType={planetType} successfullySubmit={value => setSuccessfullySubmit(value)} />}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }} component="h1">Endereço cadastrado com sucesso!</Typography>
                    <Button sx={{ width: "max-content" }} onClick={(e) => backView(e)} variant="contained">Voltar para endereços</Button>
                </Box>
            )}</>
    )
}