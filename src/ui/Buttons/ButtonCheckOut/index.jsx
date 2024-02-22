import React from 'react'
import style from "./ButtonCheckOut.module.css"

export default function ButtonCheckOut( {onClick, text}) {
  return (
    <div>
        <button onClick={onClick} className={style.btn}>{text}</button>
    </div>
  )
}
