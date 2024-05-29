import { Box } from "@mui/material";

interface PlanetIconProps {
    icon: string
}

export default function PlanetIcon({ icon }: PlanetIconProps) {
    return (
        <Box sx={{ alignSelf: "center", width: "70px", height: "70px" }} component="img" src={icon}></Box>
    )
}