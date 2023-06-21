import React from 'react'
import Style from './Bar.module.css'

const Bar = (props) => {
    return (
        <div className={Style.Navbar}>
            {props.children}
        </div>
    )
}

export default Bar