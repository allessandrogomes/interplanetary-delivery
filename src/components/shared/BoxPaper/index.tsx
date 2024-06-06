import { Box, Paper } from "@mui/material";
import { ReactNode } from "react";

interface BoxPaperProps {
    children: ReactNode
}

export default function BoxPaper({ children }: BoxPaperProps) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EEEEEE",
                height: "70vh",
                minHeight: "550px",
                width: {xs: "100%", sm: "70vw"},
                maxWidth: "600px",
                p: "20px",
                m: { xs: "0 10px", sm: "0" },
                position: "relative",
            }}
            component={Paper}>
            {children}
        </Box>
    )
}