import { Box, Paper } from "@mui/material";
import { useState } from "react";
import ManageAddressesView from "../components/ManageAddressesView";

export default function AddressRegistrationPage() {

    const [addingNewAddress, setAddingNewAddress] = useState<boolean>(false)

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#EEEEEE", height: "70vh", minHeight: "550px", width: "60vw", maxWidth: "600px", p: "20px" }} component={Paper}>
            {!addingNewAddress ? (
                <ManageAddressesView clickAddNewAddress={() => setAddingNewAddress(true)} />
            ) : (
                <button onClick={() => setAddingNewAddress(false)}>voltar</button>
            )}
        </Box>
    )
}