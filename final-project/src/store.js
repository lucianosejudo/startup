import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
  switch (action.type) {

    case 'LOAD_RANK' :
        return {
          ...state,
          pvpRank: action.players
        };

    case 'LOAD_REALM_STATUS':
        return {
          ...state,
          realmStatus: action.realmStatus.realms
        }

    case 'HANDLE_INPUT_CHANGE':
        return {
          ...state,
          inputValue: action.value
        }


    default:
        return state;
  }
}

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(reducer, { pvpRank: [], realmStatus: [], inputValue : []  }, applyMiddleware(logger, thunk));
