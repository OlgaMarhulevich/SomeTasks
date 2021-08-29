export type StateType = {
    isLoading: boolean
}

const initState: StateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.loading}
        }
        default: return state
    }
}

type ActionType = loadingACType
type loadingACType = {type: 'SET-LOADING', loading: boolean}

export const loadingAC = (loading: boolean): loadingACType => ({type: 'SET-LOADING', loading}) // fix any