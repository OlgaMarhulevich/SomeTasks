import { combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})
const store = createStore(reducers)

export default store

export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.state = store.getState() // for dev
