
import { combineReducers, createStore } from 'redux'
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
// непосредственно создаём store
// когда будут САНКИ - добавить мидлвэар!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});
store.subscribe(()=>{
    localStorage.setItem('app-state', JSON.stringify(store.getState()))

})
// определить автоматически тип всего объекта состояния
export type AppStoreType = typeof store
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
