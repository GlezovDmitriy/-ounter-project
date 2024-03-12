import {
    counterReducer,
    IncrementCountAC,
    SetMaxValueAC,
    SetMinValueAC,
    ShowMessageAC,
    StateType
} from './counter-reducer'

let startState: StateType
beforeEach(() => {
    startState = {
        count:20,
        maxValue:0,
        minValue:10,
        isDisabled: false,
    }
})

test('counter should increment only one', () => {
    /*const endState = counterReducer(startState,                // без ЭкшенКреэйтора
        {type: 'INCREMENT-COUNT'})*/
    const endState = counterReducer(startState,
        IncrementCountAC())                                       // с ЭкшенКреэйтором
    // @ts-ignore
    expect(endState.count).toBe(21)
    // @ts-ignore
    expect(endState.count*10).toBe(210)
})

test('set to maxValue', () => {
    const endState = counterReducer(startState,
        SetMaxValueAC(30))
    // @ts-ignore
    expect(endState.maxValue).toBe(30)
})

test('set to minValue', () => {
    const endState = counterReducer(startState,
        SetMinValueAC(1))
    // @ts-ignore
    expect(endState.minValue).toBe(1)
})

test('show message', () => {
    const endState = counterReducer(startState,
        ShowMessageAC('Hello!'))
    // @ts-ignore
    expect(endState.message).toBe('Hello!')
    // @ts-ignore
    expect(endState.message.length).toBe(6)
})


