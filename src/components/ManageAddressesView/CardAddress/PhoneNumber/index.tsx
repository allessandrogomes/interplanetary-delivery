import { Typography } from "@mui/material";

interface PhoneNumberProps {
    phoneNumber: string
}

export default function PhoneNumber({ phoneNumber }: PhoneNumberProps) {
    return (
        <Typography sx={{ fontSize: "0.85rem" }} component="span">{phoneNumber}</Typography>
    )
}