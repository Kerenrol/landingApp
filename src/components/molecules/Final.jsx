import "./Final.css"
import data from "../../data/final"

function Final() {
    return (
        <div className="Final-container">
            <align left>
                {data.items.map(item => {
                    return(
                        <img src={item.image} alt="" className="Final-image"/>
                    );
                })}
            </align>
            <div className="Final-menu">
                {data.items2.map(item => {
                    return (
                        <span>{item.text}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Final;