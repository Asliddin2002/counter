// Action types for  redux

interface incrementType {
    type:"INCREMENT"
    payload:number
}
interface dicrementType {
    type:"DICREMENT"
    payload:number
}
interface resetType {
    type:"RESET"
    payload:number

}

export type actionTypes = incrementType | dicrementType | resetType


// action types for initial state
type initialStateType = {
    count:number
}


const storage = localStorage.getItem("counter")

const initialState = {
    count: Number(storage)
} as initialStateType



export const counterAction = (state = initialState, action:actionTypes):initialStateType => {
    switch(action.type){
        case "INCREMENT":
            return{count: state.count + action.payload}
        case "DICREMENT":
            return{count: state.count -  action.payload}
        case "RESET":
            return{count : action.payload}
        default:
            return state
    }
}