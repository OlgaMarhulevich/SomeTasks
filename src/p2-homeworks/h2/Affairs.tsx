import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(event.currentTarget.value as FilterType)
    }

    const setClasses = (filter: FilterType) => {
        return s.btn + ( props.filter === filter ? ` ${s.activeBtn}` : '' )
    }

    return (
        <div>
            {mappedAffairs}

            <button className={setClasses('all')} onClick={setFilter} value={'all'}>All</button>
            <button className={setClasses('high')} onClick={setFilter} value={'high'}>High</button>
            <button className={setClasses('middle')} onClick={setFilter} value={'middle'}>Middle</button>
            <button className={setClasses('low')} onClick={setFilter} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs
