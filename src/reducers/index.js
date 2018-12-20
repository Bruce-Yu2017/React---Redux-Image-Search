import {combineReducers} from 'redux';

const onChangeReducer = (state='', action) => {
    if(action.type === 'ON_CHANGE') {
        return action.payload;
    }
    return state;
}

const receiveImageReducer = (state=[], action) => {
    if(action.type === 'REVEIVE') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    onchangeValue: onChangeReducer,
    allImage: receiveImageReducer
})