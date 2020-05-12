import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    FETCH_A_STREAM, 
    FETCH_STREAMS, 
    EDIT_STREAM, 
    DELETE_STREAM 
} from './types';
import streams from '../apis/streams'

//SIGN_IN action creator
export let signIn = (userId) =>{
    return({
        type: SIGN_IN,
        payload: userId
    });
};

//SIGN_OUT action creator
export let signOut = () =>{
    return ({
        type: SIGN_OUT
    });
};


//CREATE_STREAM action creator
export let createStream = (formValues) => {
    return async dispatch => {
        let response = await streams.post('/streams', formValues);
        dispatch ({
            type: CREATE_STREAM,
            payload: response.data
        });
    };
};

//short format for FETCH_STREAM action creator
export let fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch ({
        type: FETCH_STREAMS,
        payload: response.data
    });
};

//FETCH_A_STREAM action creator
export const fetchAstream = (id) => {
    return async (dispatch) =>{
        let response = await streams.get(`/streams/${id}`);
        dispatch ({
            type: FETCH_A_STREAM,
            payload: response.data
        });
    };
    
};

//EDIT_STREAM action creator
export let editStream = (id, formValues) => {
    return async (dispatch) => {
        let response = await streams.put(`/streams/${id}`, formValues);
        dispatch({
            type: EDIT_STREAM,
            payload: response.data
        });
    };
    

};


//DELETE_STREAM action creator
export let deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    });
};
