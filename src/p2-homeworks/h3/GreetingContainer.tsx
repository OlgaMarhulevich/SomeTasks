import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        const newName = event.currentTarget.value;
        if (!!Number(newName) || !newName.trim()) {
            setError(' Invalid name! ');
            setName(newName);
        } else {
            setName(newName);
            setError('')
        }
    }

    const changeName = (name: string) => {
        return name.split(' ').filter(el => el.trim()).map(el => el[0].toUpperCase() + el.substring(1)).join(' ')
    }

    const addUser = () => {
        if (error || name === '') {
            setError(' Invalid name! ')
            setName('');
        } else {
            const addedName = changeName(name);
            addUserCallback(addedName);
            setName('');
            alert(`Hello  ${addedName}!`) // need to fix
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
