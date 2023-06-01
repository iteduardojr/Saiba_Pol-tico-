import React from 'react'
import Style from './Bar.module.css'

const Bar = (props) => {
    return (
        <navbar className={Style.Navbar}>
            {props.children}
        </navbar>
    )
}

export default Bar