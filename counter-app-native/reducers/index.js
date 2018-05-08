import { INC, DEC } from "../actionTypes";

export function counterReducer(prevState={Counter:0}, action){
    switch(action.type){
        case INC: 
            return { Counter: prevState.Counter+ 1};
        case DEC: 
            return { Counter: prevState.Counter - 1};
        default: 
            return prevState;
    }
}