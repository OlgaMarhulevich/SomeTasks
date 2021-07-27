import React from 'react'
import s from './../Header.module.css'

function Error404() {
    return (
        <div className={s.errorPage} >
            <div>Sorry, this page does not exist. Try again!</div>
            <img className={s.errorImg} src={'https://www.pngkit.com/png/full/930-9306497_4042x-graphics.png'}/>
        </div>
    )
}

export default Error404
