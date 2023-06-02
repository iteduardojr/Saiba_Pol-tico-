import Image from 'next/image'
import React from 'react'
import Style from './style.module.css'

const index = (props) => {
  return (
    <main>
        <div className={Style.Main}>
            <Image src={props.Src} alt=''/>
        </div>
    </main>
  )
}

export default index