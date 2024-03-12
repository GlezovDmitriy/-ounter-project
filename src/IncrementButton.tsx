import React from 'react';
import {isDisabled} from "@testing-library/user-event/dist/utils";

type IncrementButtonType = {
    onClickIncHandler: () => void
    count: number
    maxValue: number
    minValue: number
    isDisabled:boolean
}
export const IncrementButton = React.memo(
    (props: IncrementButtonType) => {
        console.log('IncrementButton')
        return (
            <>
                <button className={"increment"}
                        onClick={props.onClickIncHandler}
                        disabled={props.isDisabled
                        || props.count >= props.maxValue
                            || props.maxValue < 0
                            || props.minValue < 0}>
                    INC
                </button>
            </>
        );
    }
)

