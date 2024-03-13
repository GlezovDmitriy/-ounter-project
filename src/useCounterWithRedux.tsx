import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
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
    const state = useSelector<AppRootStateType, StateType>(state => state.state)



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