import { Typography } from "@mui/material";

interface TypeAddressProps {
    typeAddress?: string;
    bgColor: string
}

export default function TypeAddress({ typeAddress, bgColor }: TypeAddressProps) {
    return (
        <Typography
            sx={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                backgroundColor: `${bgColor}`,
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