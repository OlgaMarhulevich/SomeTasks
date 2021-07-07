import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers} /*деструктуризация пропсов*/ ) => {

    const inputClass = error ? s.error : '' // need to fix with (?:)

    const enterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') addUser();
    }

    const usersCounter = () => {
        if (totalUsers === 0) return 'no users yet'
        else if (totalUsers === 1) return `${totalUsers} user added`
        else return `${totalUsers} users added`
    }

    return (
        <div className={s.greeting}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={enterPressed}/>
            <button className={s.btn} onClick={addUser}>Add</button>
            <span>{usersCounter()}</span>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
