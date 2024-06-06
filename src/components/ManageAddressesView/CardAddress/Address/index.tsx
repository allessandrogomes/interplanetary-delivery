import { Typography } from "@mui/material";

interface AddressProps {
    address: string
}
export default function Address({ address }: AddressProps) {
    return (
        <Typography sx={{ fontSize: { xs: "12px", sm: '1rem' }, fontWeight: "bold" }} component="span">{address}</Typography>
    )
}