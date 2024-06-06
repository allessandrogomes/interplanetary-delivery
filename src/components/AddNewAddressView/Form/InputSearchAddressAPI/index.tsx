import { TextField } from "@mui/material"
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api"
import React, { useEffect, useRef, useState } from "react"

interface InputSearchAddressAPIProps {
    addressValue: (value: string) => void
}

const libraries = "places"

function InputSearchAddressAPI({ addressValue }: InputSearchAddressAPIProps) {

    const inputRef = useRef<google.maps.places.SearchBox | null>(null)
    const [address, setAddress] = useState("")

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBOLVUn6zQzw8RbVNpyBN1jEeJ-b76UoQI",
        libraries: [libraries]
    });

    function handlePlaceChanged() {
        const [place]: any = inputRef.current?.getPlaces()
        if (place) {
            setAddress(place.formatted_address)
        }
    }

    useEffect(() => {
        addressValue(address)
    }, [address])

    return isLoaded ? (
        <StandaloneSearchBox onPlacesChanged={handlePlaceChanged} onLoad={(ref) => (inputRef.current = ref)}>
            <TextField label="Endereço" value={address} onChange={e => setAddress(e.target.value)} sx={{ width: "100%" }} placeholder="ex: Brasil, São Paulo, 42904-83..." required/>
        </StandaloneSearchBox>
    ) : <></>
}

export default React.memo(InputSearchAddressAPI)