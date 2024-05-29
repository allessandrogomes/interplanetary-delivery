import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddressRegistrationPage from "./pages/AddressRegistrationPage";
import DefaultPage from "./components/DefaultPage";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage />}>
                    <Route index element={<AddressRegistrationPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}