// 

import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import HomePage from "@/pages/home-page"


export const AppRoutes = ()=>{

    return(

        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/user-profile" element={<span>User Profile Page</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}