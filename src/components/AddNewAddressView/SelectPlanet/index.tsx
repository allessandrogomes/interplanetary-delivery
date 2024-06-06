import { Box, Button, Paper } from "@mui/material";
import PlanetIcon from "../../ManageAddressesView/CardAddress/PlanetIcon";

interface SelectPlanetProps {
    planetType: string | null
    clickEarth: React.MouseEventHandler<HTMLButtonElement>
    clickMars: React.MouseEventHandler<HTMLButtonElement>
    clickChangePlanet: React.MouseEventHandler<HTMLButtonElement>

} 

export default function SelectPlanet({ planetType, clickEarth, clickMars, clickChangePlanet }: SelectPlanetProps) {

    return (
        <Box sx={{ mb: "20px", display: "flex", alignItems: "center", width: "max-content" }}>
            {planetType === "terra" ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px", alignItems: "center" }}>
                    <Paper sx={{ backgroundColor: "#4EAE4D" }}>
                        <PlanetIcon icon="earth-icon.svg" displayIcon={{xs: "inherit"}}/>
                    </Paper>
                    <Button onClick={(e) => clickChangePlanet(e)} sx={{ fontSize: "12px", height: "30px", width: "120px", textTransform: "inherit" }} variant="outlined">Alterar planeta</Button>
                </Box>
            ) : planetType === "marte" ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px", alignItems: "center" }}>
                    <Paper sx={{ backgroundColor: "#E7413E" }}>
                        <PlanetIcon icon="mars-icon.svg" displayIcon={{xs: "inherit"}}/>
                    </Paper>
                    <Button onClick={(e) => clickChangePlanet(e)} sx={{ fontSize: "12px", height: "30px", width: "120px", textTransform: "inherit" }} variant="outlined">Alterar planeta</Button>
                </Box>
            ) : (
                <>
                    <Button onClick={(e) => clickEarth(e)} sx={{ height: "70px", mr: "10px", backgroundColor: "#4EAE4D" }} variant="contained"><PlanetIcon icon="earth-icon.svg" displayIcon={{xs: "none", sm: "inherit"}}/>Terra</Button>
                    <Button onClick={(e) => clickMars(e)} sx={{ height: "70px", backgroundColor: "#E7413E" }} variant="contained"><PlanetIcon icon="mars-icon.svg" displayIcon={{xs: "none", sm: "inherit"}}/>Marte</Button>
                </>
            )}
        </Box>
    )
}