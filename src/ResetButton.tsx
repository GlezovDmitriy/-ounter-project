import React from 'react';
import {isDisabled} from "@testing-library/user-event/dist/utils";

type ResetButtonType = {
    onClickResetHandler: () => void
    count: number
    minValue: number
    maxValue: number
    isDisabled: boolean
}
export const ResetButton = React.memo(
    (props: ResetButtonType) => {
        console.log('ResetButton')
        return (
            <>
                <button className={"reset"}
                        onClick={props.onClickResetHandler}
                        disabled={props.isDisabled
                            || props.count === props.minValue
                            || props.minValue < 0
                            || props.maxValue < 0}>
                    RESET
                </button>
            </>
        );
    }
)

