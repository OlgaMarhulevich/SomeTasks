import {UserType} from "../HW8";

type ActionType = SortActionType | CheckActionType
type SortActionType = {type: 'sort', payload: 'up' | 'down'}
type CheckActionType = {type: 'check', payload: number}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return action.payload === 'up' ?
                    [...state].sort((a, b) => a.name > b.name ? 1 : -1) :
                    [...state].sort( (a, b) => a.name < b.name ? 1 : -1 )
        }
        case 'check': {
            // need to fix
            return [...state].filter( u => u.age > action.payload )
        }
        default: return state
    }
}