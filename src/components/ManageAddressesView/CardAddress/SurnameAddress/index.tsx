import { Typography } from "@mui/material";

interface SurnameAddressProps {
    surnameAddress: string
}

export default function SurnameAddress({ surnameAddress }: SurnameAddressProps) {
    return (
        <Typography sx={{ fontSize: "0.75rem", color: "gray" }} component="span">{surnameAddress}</Typography>
    )
}