import "./Descrip_serv.css"
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Titulo";
import Nav from "../Nav/Nav";
import Style from "./../../Componentes/Inicio/Style.css";
function Descrip () {
    return (
        <div className="contenpag">
            <div className={Style.Header}><Header></Header></div>
            <div className={Style.Nav}><Nav></Nav></div>
            <div class="descconten">
                <h1>Pasos para Pedir un Turno</h1>
                <div class="responsdesc">
                    <div className="caj2">

                    </div>
                </div>
            </div>
            <div className={Style.Footer}> <Footer></Footer></div>
        </div>
    )
}
export default Descrip