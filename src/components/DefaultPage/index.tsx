import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


export default function DefaultPage() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", backgroundColor: "#151515" }}>
            <Outlet />
        </Box>
    )
}