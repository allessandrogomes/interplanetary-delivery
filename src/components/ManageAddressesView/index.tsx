import { Box, Button } from "@mui/material"
import TitlePage from "../TitlePage"
import CardAddress from "./CardAddress"
import ButtonsCancelOrConfirmChanges from "../ButtonsCancelOrConfirmChanges"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { RootState } from "../../store"
import IAddressInfo from "../../interfaces/IAddressInfo"
import { updateDefaultAddress } from "../../store/reducers/adresses"

interface ManageAddressesViewProps {
    clickAddNewAddress: React.MouseEventHandler<HTMLButtonElement>
}

export default function ManageAddressesView({ clickAddNewAddress }: ManageAddressesViewProps) {

    const adresses: any = useSelector<RootState>((state) => state.adresses)
    const dispatch = useDispatch()

    const [defaultIdAddress, setDefaultIdAddress] = useState<number | null>(null)
    const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null)
    const [changedAddress, setChangedAddress] = useState<boolean>(false)

    useEffect(() => {
        if (adresses.length > 0) {
            const defaultAddress = adresses.find((item: IAddressInfo) => item.defaultAddress)
            if (defaultAddress) {
                setDefaultIdAddress(defaultAddress.id)
                setSelectedAddressId(defaultAddress.id)
            }
        }
    }, [adresses])

    function updateSelectedAddress(clickedIdAddress: number) {
        setSelectedAddressId(clickedIdAddress)
        if (clickedIdAddress !== defaultIdAddress) {
            setChangedAddress(true)
        } else {
            setChangedAddress(false)
        }
    }

    const sortedAddresses = [...adresses].sort((a, b) => (a.id === defaultIdAddress ? -1 : b.id === defaultIdAddress ? 1 : 0))

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", width: "100%", gap: "50px", position: "relative" }}>
            <TitlePage title="Meus endereços" />
            <Button onClick={(e) => clickAddNewAddress(e)} sx={{ position: "absolute", right: "0", top: "40px" }} size="small" variant="contained">Adicionar endereço</Button>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", overflow: "auto", m: "10px 0 20px 0", width: "100%", minHeight: "300px", height: "100%" }}>
                {sortedAddresses.map(address => (
                    <CardAddress
                        {...address}
                        key={address.id}
                        selectedId={selectedAddressId}
                        onAddressClick={clickedIdAddress => updateSelectedAddress(clickedIdAddress)}
                    />
                ))}
            </Box>
            <ButtonsCancelOrConfirmChanges
                changedAddress={changedAddress}
                saveChanges={() => {
                    dispatch(updateDefaultAddress(selectedAddressId))
                    setChangedAddress(false)
                }}
                cancelChanges={() => {
                    setSelectedAddressId(defaultIdAddress)
                    setChangedAddress(false)
                }} />
        </Box>
    )
}