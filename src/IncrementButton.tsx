import React from 'react';

type IncrementButtonType = {
    onClickIncHandler: () => void
    count: number
    maxValue: number
    minValue: number
}
export const IncrementButton = React.memo(
    (props: IncrementButtonType) => {
        console.log('IncrementButton')
        return (
            <>
                <button className={"increment"}
                        onClick={props.onClickIncHandler}
                        disabled={props.count >= props.maxValue
                            || props.maxValue < 0
                            || props.minValue < 0}>
                    INC
                </button>
            </>
        );
    }
)

