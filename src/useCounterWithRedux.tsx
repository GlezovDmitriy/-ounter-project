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



    const onClickIncHandler = () => {
        const action = IncrementCountAC()
        dispatch(action)
    }
    const onClickResetHandler = () => {
        const action = ResetCountAC()
        dispatch(action)
    }
    const SettingButtonHandler = useCallback(
        () => {
            const action = SettingCounterAC()
            dispatch(action)
        },[dispatch]
    )
    const onChangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const action = SetMaxValueAC (+event.currentTarget.value)
        dispatch(action)
        console.log('maxValue')
    }
    const onChangeMinInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const action = SetMinValueAC (+event.currentTarget.value)
        dispatch(action)
        console.log('minValue')
    }
    return{
        state,
        onChangeMinInputHandler,
        onChangeMaxInputHandler,
        SettingButtonHandler,
        onClickResetHandler,
        onClickIncHandler,

    }
}