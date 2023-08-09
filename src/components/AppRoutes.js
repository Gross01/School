import React, {useContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {AuthContext} from "../context";

function AppRoutes() {

    const {isAuth} = useContext(AuthContext)

    return (
        isAuth
            ?
            <Routes>
                { privateRoutes.map(route =>
                    <Route
                        key = {route.path}
                        path={route.path}
                        element={<route.element/>}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key = {route.path}
                        path={route.path}
                        element={<route.element/>}
                    />
                )}
            </Routes>
    );
}

export default AppRoutes;