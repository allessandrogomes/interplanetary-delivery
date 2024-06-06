import { useState } from "react";
import ManageAddressesView from "../components/ManageAddressesView";
import AddNewAddressView from "../components/AddNewAddressView";
import BoxPaper from "../components/shared/BoxPaper";

export default function AddressRegistrationPage() {

    const [addingNewAddress, setAddingNewAddress] = useState<boolean>(false)

    return (
        <BoxPaper>
            {!addingNewAddress ? (
                <ManageAddressesView clickAddNewAddress={() => setAddingNewAddress(true)} />
            ) : (
                <AddNewAddressView backView={() => setAddingNewAddress(false)} />
            )}
        </BoxPaper>
    )
}