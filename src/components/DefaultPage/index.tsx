import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


export default function DefaultPage() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", minHeight: "100vh", backgroundColor: "#151515", p: "50px 0" }}>
            <Outlet />
        </Box>
    )
}