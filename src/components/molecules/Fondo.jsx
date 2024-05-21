import "./Fondo.css";
import data from "../../data/Fondo";

function Fondo() {
    return(
        <div className="Fondo-container">
            {data.items.map(item => {
                return (
                    <img src={item.image} alt="" className="Fondo-image"/>
                );
            })}
            <div className="Fondo-menu">
                {data.items2.map(item => {
                    return (
                        <span>{item.text}</span>
                    );
                })}
            </div>
        </div>
    );
}

export default Fondo;