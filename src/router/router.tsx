import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {HomeView} from "../views/home";
import {IllustView} from "../views/illust";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/:pid" element={<IllustView/>}/>
            </Routes>
        </BrowserRouter>
    )
}