import React from 'react';

type SettingButtonType = {
    SettingButtonHandler: () => void
    maxValue: number
    minValue: number
    isDisabled: boolean
    count: number
}
export const SettingButton = React.memo(
    (props: SettingButtonType) => {
        console.log('SettingButton')
        return (
            <>
                <button className={'setting'}
                        onClick={props.SettingButtonHandler}
                        disabled={props.maxValue <= props.minValue
                            || props.maxValue <= 0
                            || props.minValue < 0}>
                    SAVE SETTING
                </button>
            </>
        );
    }
)


