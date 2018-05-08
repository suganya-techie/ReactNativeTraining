import { INC, DEC } from '../actionTypes';

export function incrementActionCreator(){
    return {
        type: INC
    }
}

export function decrementActionCreator(){
    return {
        type: DEC
    }
}