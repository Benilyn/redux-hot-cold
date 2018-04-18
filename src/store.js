import {createStore} from 'redux';

import {reduxHotCold} from './reducers';

export default createStore(reduxHotCold);