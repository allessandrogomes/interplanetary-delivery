import { Box } from "@mui/material";

interface PlanetIconProps {
    icon: string
    displayIcon: object
}

export default function PlanetIcon({ icon, displayIcon }: PlanetIconProps) {
    return (
        <Box sx={{ alignSelf: "center", width: "70px", height: "70px", display: displayIcon }} component="img" src={icon}></Box>
    )
}