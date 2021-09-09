import React from 'react'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../p2-homeworks/h10/bll/store";
import def from '../../../assests/background/default.jpg'
import dark from '../../../assests/background/dark.png'
import light from '../../../assests/background/light.jpg'
import red from '../../../assests/background/red.jpg'
import blue from '../../../assests/background/blue.jpg'

function App() {

    let customStyleApp = {
        backgroundImage: `url(${def})`,
        color: '#d9f1ed',
    }

    const theme = useSelector<AppStateType, string>(state => state.theme.currentTheme)

    switch (theme) {
        case 'dark':
            customStyleApp = {
                ...customStyleApp,
                backgroundImage: `url(${dark})`,
            }
            break
        case 'light':
            customStyleApp = {
                ...customStyleApp,
                backgroundImage: `url(${light})`,
                color: '#242828',
            }
            break
        case 'red':
            customStyleApp = {
                ...customStyleApp,
                backgroundImage: `url(${red})`,
            }
            break
        case 'blue':
            customStyleApp = {
                ...customStyleApp,
                backgroundImage: `url(${blue})`,
            }
            break
    }

    const appStyles = {
        padding: 30,
        backgroundSize: 'cover',
        minHeight: '100vh',
        ...customStyleApp
    }

    return (
        <div style={appStyles}>
            <div>react homeworks:</div>
            <HW5/>
        </div>
    )
}

export default App
