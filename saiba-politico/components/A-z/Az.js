import React from 'react'
import Style from './Style.module.css'
import { IoChevronDownSharp } from "react-icons/io5";



const Az = (props) => {
  return (
    <>
      <div className={Style.Div}>
        <div className={Style.Geral}>
          <p>{props.Titulo}</p>
        </div>
        <div className={Style["Geral", "Icon"]}>
          <IoChevronDownSharp className={Style.Icon1}/>
        </div>
      </div>
    </>
  )
}

export default Az