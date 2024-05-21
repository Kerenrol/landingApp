import React from "react";
import "./Listas.css"
import { listaData } from "../../data/lista";

function Lista(){
    return(
        <div className="lista-container">
            <div className="lista-grid">
                {listaData.map((item, index) =>(
                    <div key={index} className="lista-item">
                        <img src={item.image} alt="" />
                        <span>{item.name}</span>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Lista;