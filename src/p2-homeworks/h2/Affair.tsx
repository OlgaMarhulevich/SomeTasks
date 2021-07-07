import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    const classPriority = () => {
        switch (props.affair.priority) {
            case 'high':
                return s.red;
            case 'middle':
                return s.yellow;
            case 'low':
                return s.green;
        }
    }

    return (
        <div className={s.affair}>
            <div>
                {props.affair.name}
            </div>
            <div className={classPriority()}>
                [{props.affair.priority}]
            </div>
            <button className={s.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
