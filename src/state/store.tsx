
import { combineReducers, createStore } from 'redux'
import {counterReducer} from "./counter-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
// непосредственно создаём store
export const store = createStore(rootReducer)

store.subscribe(()=>{
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
    localStorage.setItem('count', JSON.stringify(store.getState().counter?.count))
})
// определить автоматически тип всего объекта состояния
export type AppStoreType = typeof store
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
