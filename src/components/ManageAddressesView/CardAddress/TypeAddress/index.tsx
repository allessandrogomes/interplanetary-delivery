import { Typography } from "@mui/material";

interface TypeAddressProps {
    typeAddress?: string;
}

export default function TypeAddress({ typeAddress }: TypeAddressProps) {
    return (
        <Typography
            sx={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                backgroundColor: "#CDE8E5",
                borderRadius: "5px",
                p: "3px",
                width: "max-content"
            }}
            component="span"
        >
            {typeAddress}
        </Typography>
    )
}