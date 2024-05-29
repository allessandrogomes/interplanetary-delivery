import { Typography } from "@mui/material";

interface SurnameAddressProps {
    surnameAddress: string
}

export default function SurnameAddress({ surnameAddress }: SurnameAddressProps) {
    return (
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }} component="span">{surnameAddress}</Typography>
    )
}