
import { 
    FETCH_A_STREAM, 
    CREATE_STREAM, 
    FETCH_STREAMS, 
    EDIT_STREAM, 
    DELETE_STREAM 
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) =>{
    switch(action.type){
        case FETCH_STREAMS  :
            return {...state, ..._.mapKeys(action.payload, 'id')};
        
        case FETCH_A_STREAM :
            /*
            conventional version
            const newState = {...state};
            newState[actiion.payload.id] = action.payload;
            return newState;
            */

            //new ES2015 syntax with id interpolation similar to Python
            //return {...state, [action.payload.id]: action.payload};
            return addRecordToState(state, action); 
        case CREATE_STREAM :
            return addRecordToState(state, action);
        

        case EDIT_STREAM: 
            return addRecordToState(state, action);

        case DELETE_STREAM:
            return _.omit(state, action.payload);

        default: 
            return {state}
    }
}

//helper fucntion to isolate some repititive logic
function addRecordToState(state, action){
    return {...state, [action.payload.id]: action.payload};
};