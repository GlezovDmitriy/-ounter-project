import React, {ChangeEvent, useEffect, useState} from 'react';
import {IncrementButton} from "./IncrementButton";
import {ResetButton} from "./ResetButton";
import {SettingButton} from "./components/SettingButton";
import {useDispatch, useSelector} from "react-redux";
import {IncrementCountAC, ResetCountAC, SetMaxValueAC, SetMinValueAC, StateType} from "./state/counter-reducer";
import {AppStoreType, store} from "./state/store";
import {useCounterWithRedux} from "./useCounterWithRedux";

export const CounterWithRedux = React.memo(
    () => {
        const dispatch = useDispatch()

        let [error, setError] = useState(false)
        let [setting, setSetting] = useState(false)


       /* const onClickIncHandler = () => {
            const action = IncrementCountAC()
            dispatch(action)
        }
        const onClickResetHandler = () => {
            const action = ResetCountAC()
            dispatch(action)
        }
        const SettingButtonHandler = () => {
            const action = ResetCountAC()
            dispatch(action)
        }
        const onChangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const action = SetMaxValueAC (+event.currentTarget.value)
            setSetting(true)
            dispatch(action)
            console.log('maxValue')
        }
        const onChangeMinInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const action = SetMinValueAC (+event.currentTarget.value)
            setSetting(true)
            dispatch(action)
            console.log('minValue')
        }*/
        const {
            state,
            onChangeMinInputHandler,
            onChangeMaxInputHandler,
            SettingButtonHandler,
            onClickResetHandler,
            onClickIncHandler,
        } = useCounterWithRedux()
        console.log('CounterWithRedux')
        return (
            <>
                <div className={"main"}>
                    <div className={"display"}>
                        <div>
                        <span
                            className={state.maxValue <= state.minValue || state.maxValue <= 0 ? "error" : "no-error"}>max-Value  </span>
                            <input className={state.maxValue <= state.minValue || state.maxValue <= 0 ? "input-error" : "input"}
                                   type={"number"}
                                   onChange={onChangeMaxInputHandler}
                                   value={state.maxValue}/>
                        </div>
                        <div>
                            <span className={state.minValue < 0 || state.minValue >= state.maxValue ? "error" : "no-error"}>min-Value  </span>
                            <input className={state.minValue < 0 || state.minValue >= state.maxValue ? "input-error" : "input"}
                                   type={"number"}
                                   onChange={onChangeMinInputHandler}
                                   value={state.minValue}/>
                        </div>
                    </div>

                    <div>
                        <SettingButton minValue={state.minValue}
                                       maxValue={state.maxValue}
                                       isDisabled={state.isDisabled}
                                       count={state.count}
                                       SettingButtonHandler={SettingButtonHandler}/>
                    </div>
                    <div className={"message"}>
                        {state.minValue >= state.maxValue ||
                        state.minValue < 0 ||
                        state.maxValue <= 0
                            ? 'Enter correctly value, please!'
                            : ''}
                    </div>
                </div>
                <div className={"main"}>
                    <div className={"display"}>
                        {state.minValue >= state.maxValue ||
                        state.minValue < 0 ||
                        state.maxValue <= 0
                            ? <span className={"Error"}> ERROR!</span>
                            : <span className={state.count === state.maxValue
                                ? "stop-counter"
                                : "counter"}>{state.count}</span>}

                    </div>
                    <div>
                        <IncrementButton count={state.count}
                                         onClickIncHandler={onClickIncHandler}
                                         maxValue={state.maxValue}
                                         minValue={state.minValue}
                                         isDisabled={state.isDisabled}/>
                        <ResetButton count={state.count}
                                     onClickResetHandler={onClickResetHandler}
                                     minValue={state.minValue}
                                     maxValue={state.maxValue}
                                     isDisabled={state.isDisabled}/>

                    </div>
                    <div className={"message"}>
                        {state.count === state.maxValue ? `Sorry, only from ${state.minValue} to ${state.maxValue}` : ''}
                    </div>

                </div>
            </>

        );
    }
)

