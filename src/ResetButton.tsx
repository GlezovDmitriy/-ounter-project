import React from 'react';

type ResetButtonType = {
    onClickResetHandler:()=>void
    count:number
    minValue: number
    maxValue:number
}
export const ResetButton = (props:ResetButtonType) => {
    console.log('ResetButton')
    return (
        <>
            <button className={"reset"}
                    onClick={props.onClickResetHandler}
                    disabled={props.count === props.minValue
                        || props.minValue < 0
            || props.maxValue < 0}>
                RESET
            </button>
        </>
    );
};

