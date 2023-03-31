import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

const LayOut = () => {
    return <>
            <Header/>
            <Outlet/>
        </>

};

export default LayOut;