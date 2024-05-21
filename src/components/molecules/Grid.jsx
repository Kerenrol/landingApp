import Text from "../atoms/Text";
import mysql from "../../data/mysql";

function Grid() {
    return (
        mysql.products.map (product => {
            return (
                <>
                <img src={product.image} alt=""/>
                <Text text={product.text}></Text>
                </>
            )
        })
    )
}

export default Grid;