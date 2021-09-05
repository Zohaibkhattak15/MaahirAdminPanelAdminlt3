import { combineReducers } from 'redux';
import {UserReducer} from './Store/reducers/common';

const allReducers = combineReducers({
    UserReducer
 });
 
 export default allReducers;