import "./Titulo.css";
import React from "react";
import LogoNas from "../../Componentes/img/LogoNas.png";
function Cabeza  () {

    return(
        <div>
            <div className="responsive"> 
                <div className="logo">
                  <img src={LogoNas}></img>
                </div>
            </div>
        </div>
    )
}

export default Cabeza;
