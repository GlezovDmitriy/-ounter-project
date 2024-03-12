import {type} from "os";

export type StateType = {
    count: number
    maxValue: number
    minValue: number
    message: string
}
type IncrementCounterActionType = {
    type: 'INCREMENT-COUNT'

}
type SetMaxValueActionType = {
    type: 'SET-MAX-VALUE-COUNT',
    maxValue: number
}
type SetMinValueActionType = {
    type: 'SET-MIN-VALUE-COUNT',
    minValue: number
}
type ShowMessageActionType = {
    type: 'SHOW-MESSAGE',
    message: string
}
type ResetCountActionType = {
    type: 'RESET-COUNT',
}

type ActionsType =
    IncrementCounterActionType
    | SetMaxValueActionType
    | SetMinValueActionType
    | ShowMessageActionType
| ResetCountActionType

const initialState: StateType = {
    count: 0,
    maxValue: 1,
    minValue: 0,
    message: '',

}
export const counterReducer = (state: StateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'INCREMENT-COUNT': {
            let stateCopy = {...state}
            stateCopy.count = state.count + 1
            return stateCopy
        }
        case 'RESET-COUNT': {
            let stateCopy = {...state}
            stateCopy.count = state.minValue
            return stateCopy
        }
        case 'SET-MAX-VALUE-COUNT': {
            let stateCopy = {...state}
            stateCopy.maxValue = action.maxValue
            return stateCopy
        }
        case 'SET-MIN-VALUE-COUNT': {
            let stateCopy = {...state}
            stateCopy.minValue = action.minValue
            return stateCopy
        }
        case 'SHOW-MESSAGE': {
            /*let stateCopy = {...state}
            stateCopy.message = action.message
            return stateCopy*/
            return {...state,message : action.message}
        }

        default:
           return  state
    }
}

export const IncrementCountAC = ():IncrementCounterActionType=>{
    return {type: 'INCREMENT-COUNT'}
}
export const ResetCountAC = ():ResetCountActionType=>{
    return {type: 'RESET-COUNT'}
}
export const SetMaxValueAC = (maxValue:number):SetMaxValueActionType=>{
    return {type: 'SET-MAX-VALUE-COUNT', maxValue: maxValue }
}
export const SetMinValueAC = (minValue:number):SetMinValueActionType=>{
    return {type: 'SET-MIN-VALUE-COUNT', minValue: minValue }
}
export const ShowMessageAC = (message:string):ShowMessageActionType=>{
    return {type: 'SHOW-MESSAGE', message: message }
}