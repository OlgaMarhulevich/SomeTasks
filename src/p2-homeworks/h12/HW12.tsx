import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'light', 'red', 'blue', 'default'];

function HW12() {
    const theme = useSelector<AppStateType, string>(state => state.theme.currentTheme)
    const dispatch = useDispatch()

    const changeTheme = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span style={{display: 'block', margin: 15}} className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperRadio
                options={themes}
                onChangeOption={changeTheme}
                value={theme}
                className={s[theme + '-text']}
            />

            <hr/>
        </div>
    );
}

export default HW12;
