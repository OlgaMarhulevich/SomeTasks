import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStateType} from "./bll/store";
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStateType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            <div className={s.wrapper}>
                {loading ?
                    <img className={s.loading}
                         alt={'loading'}
                         src={'https://www.blackview.ru/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif'}/>
                    :
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
