import { Typography } from "@mui/material";

interface AddressProps {
    address: string
}
export default function Address({ address }: AddressProps) {
    return (
        <Typography sx={{ fontSize: "0.75rem", color: "gray" }} component="span">{address}</Typography>
    )
}