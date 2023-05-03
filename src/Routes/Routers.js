
import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { BooksHive, RecordsCenter } from "../Pages"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/bookshive" />}></Route>
            <Route path="/bookshive" element={<BooksHive />}></Route>
            <Route path="/recordscenter" element={<RecordsCenter />}></Route>
        </Routes>
    )
}

export default Routers
