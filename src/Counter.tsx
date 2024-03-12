import React, {ChangeEvent, useEffect, useState} from 'react';
import {IncrementButton} from "./IncrementButton";
import {ResetButton} from "./ResetButton";
import {Button} from "@mui/material";
import {SettingButton} from "./components/SettingButton";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./state/counter-reducer";
import {AppRootStateType} from "./state/store";

export const Counter = () => {
    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [minValue, setMinValue] = useState(0)
    let [isDisabled, setIsDisabled] = useState(false)
    let [message, setMessage] = useState('')
    let [setting, setSetting] = useState(false)


    useEffect(() => {
        let startValue = localStorage.getItem('min')
        if (startValue) {
            let newValue = JSON.parse(startValue)
            setMinValue(newValue)
            setCount(newValue)
            console.log(newValue)
        }
        let endValue = localStorage.getItem('max')
        if (endValue) {
            let newestValue = JSON.parse(endValue)
            setMaxValue(newestValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('max', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('min', JSON.stringify(minValue))
    }, [minValue])
    const onClickIncHandler = () => {
        setCount(count + 1)
    }
    const onClickResetHandler = () => {
        setCount(minValue)
    }
    const SettingButtonHandler = () => {
        setCount(minValue)
        setMessage('')
        setSetting(false)
    }
    const onChangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
        setSetting(true)
        setCount(0)
        setMessage('Save settings, please!')
        setSetting(true)
    }
    const onChangeMinInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+event.currentTarget.value)
        setCount(0)
        setMessage('Save settings, please!')
        setSetting(true)
    }
    return (
        <>
            <div className={"main"}>
                <div className={"display"}>
                    <div>
                        <span
                            className={maxValue <= minValue || maxValue <= 0 ? "error" : "no-error"}>max-Value  </span>
                        <input className={maxValue <= minValue || maxValue <= 0 ? "input-error" : "input"}
                               type={"number"}
                               onChange={onChangeMaxInputHandler}
                               value={maxValue}/>
                    </div>
                    <div>
                        <span className={minValue < 0 || minValue >= maxValue ? "error" : "no-error"}>min-Value  </span>
                        <input className={minValue < 0 || minValue >= maxValue ? "input-error" : "input"}
                               type={"number"}
                               onChange={onChangeMinInputHandler}
                               value={minValue}/>
                    </div>
                </div>

                <div>
                    <SettingButton minValue={minValue}
                                   maxValue={maxValue}
                                   isDisabled={isDisabled}
                                   count={count}
                                   SettingButtonHandler={SettingButtonHandler}/>
                </div>
                <div className={"message"}>
                    {minValue >= maxValue ||
                    minValue < 0 ||
                    maxValue <= 0
                        ? 'Enter correctly value, please!'
                        : ''}
                </div>
            </div>
            <div className={"main"}>
                <div className={"display"}>
                    {minValue >= maxValue ||
                    minValue < 0 ||
                    maxValue <= 0
                        ? <span className={"Error"}> ERROR!</span>
                        : <span className={count === maxValue ? "stop-counter" : "counter"}>{count}</span>}

                </div>
                <span className={"message"}>{message}</span>
                <div>
                    <IncrementButton count={count}
                                     onClickIncHandler={onClickIncHandler}
                                     maxValue={maxValue}
                                     minValue={minValue}
                                     isDisabled={isDisabled}/>
                    <ResetButton count={count}
                                 onClickResetHandler={onClickResetHandler}
                                 minValue={minValue}
                                 maxValue={maxValue}
                    isDisabled={isDisabled}/>

                </div>
                <div className={"message"}>
                    {count === maxValue ? `Sorry, only from ${minValue} to ${maxValue}` : ''}
                </div>

            </div>
        </>

    );
};   // исходный

