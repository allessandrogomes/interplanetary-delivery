import { Box, Button } from "@mui/material";

interface ButtonsCancelOrConfirmChangesProps{
    changedAddress: boolean,
    saveChanges: React.MouseEventHandler<HTMLButtonElement>
    cancelChanges: React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonsCancelOrConfirmChanges({ changedAddress, saveChanges, cancelChanges }: ButtonsCancelOrConfirmChangesProps) {
    return (
        <Box sx={{ display: "flex", gap: "10px", alignSelf: "end" }}>
            <Button onClick={cancelChanges} sx={{ fontSize: "12px" }} variant="outlined" disabled={!changedAddress}>Cancelar</Button>
            <Button onClick={saveChanges} sx={{ fontSize: "12px" }} variant="contained" disabled={!changedAddress}>Salvar mudanças</Button>
        </Box>
    )
}