import {useDispatch, useSelector} from "react-redux";
import {AppStateType, AppStoreType} from "./state/store";
import {
    IncrementCountAC,
    ResetCountAC,
    SetMaxValueAC,
    SetMinValueAC,
    SettingCounterAC,
    StateType
} from "./state/counter-reducer";
import {ChangeEvent, useCallback, useState} from "react";

export const useCounterWithRedux = ()=>{
    const dispatch = useDispatch()
    const state = useSelector<AppStateType, StateType>(state => state.counter)
    const count = useSelector<StateType>(state => state.count)
    const maxValue = useSelector<StateType>(state => state.maxValue)
    const minValue = useSelector<StateType>(state => state.minValue)
    const isDisabled = useSelector<StateType>(state => state.isDisabled)



    const onClickIncHandler = useCallback(
        () => {
            const action = IncrementCountAC()
            dispatch(action)
        },[dispatch]
    )
    const onClickResetHandler = useCallback(
        () => {
            const action = ResetCountAC()
            dispatch(action)
        },[dispatch]
    )
    const SettingButtonHandler = useCallback(
        () => {
            const action = SettingCounterAC()
            dispatch(action)
        },[dispatch]
    )
    const onChangeMaxInputHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const action = SetMaxValueAC (+event.currentTarget.value)
            dispatch(action)
            console.log('maxValue')
        },[dispatch]
    )
    const onChangeMinInputHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const action = SetMinValueAC (+event.currentTarget.value)
            dispatch(action)
            console.log('minValue')
        },[dispatch]
    )
    return{

        state,
        onChangeMinInputHandler,
        onChangeMaxInputHandler,
        SettingButtonHandler,
        onClickResetHandler,
        onClickIncHandler,

    }
}