import { Typography } from "@mui/material";

interface TitlePageProps {
    title: string
}

export default function TitlePage({ title }: TitlePageProps) {
    return (
        <Typography
            sx={{
                alignSelf: "start",
                ml: "10px",
                fontSize: "1.5rem",
                fontWeight: "bold"
            }} component="h1"
        >
            {title}
        </Typography>
    )
}