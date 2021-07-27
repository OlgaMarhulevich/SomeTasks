import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.navbar}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.navlink} activeClassName={s.active}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}  className={s.navlink} activeClassName={s.active}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}  className={s.navlink} activeClassName={s.active}>junior-plus</NavLink>

            <img src={'https://thypix.com/wp-content/uploads/blue-arrow-71.png'} className={s.arrow}/>
        </div>
    )
}

export default Header
