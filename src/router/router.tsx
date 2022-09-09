import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeView} from "../views/home";
import {IllustView} from "../views/illust";
import {SearchView} from "../views/search";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomeView/>}/>
                <Route path="/search/artworks/" element={<SearchView/>}/>
                <Route path="/illust/:pid" element={<IllustView/>}/>
            </Routes>
        </BrowserRouter>
    )
}