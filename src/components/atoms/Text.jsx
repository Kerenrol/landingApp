import React from "react";
import style from './Text.module.css'

function Text({text}) {
    return(
        <p className={style.pg_text}>{text}</p>
    )
}

export default Text;