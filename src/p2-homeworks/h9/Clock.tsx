import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString()
    const stringDate = date?.toLocaleDateString()

    const style = {
        display: 'flex',
        height: '30px',
        width: '100px',
        margin: '10px 50px',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div>
            <div
                style={style}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            <div style={style}>
                {show && stringDate}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
