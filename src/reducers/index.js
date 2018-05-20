import * as type from '../actions/type'
import { combineReducers } from 'redux'

const httpData = (state = {}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {
                ...state
            };
        default:
            return {...state};
    }
};


export default combineReducers({
    httpData
});