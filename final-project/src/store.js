import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
   pvpRank: {
    players: []
   },
   realmStatus: {
     realms: []
   },
   inputValue: [],
   playerProfile: [],
   petList: {
     pets: []
   },
}

const reducer = (state, { type, payload }) => {
  switch (type) {

    case 'LOAD_RANK' :
        return {
          ...state,
          pvpRank: payload
          //loading: true
        };

  /*
    case 'LOAD_RANK_SUCCESS' :
        return {
          ...state,
          pvpRank: payload.players
          loading: false,
        };

    case 'LOAD_RANK_FAIL' :
        return {
          ...state,
          error: action.payload.error
          loading: false,
        };
*/

    case 'LOAD_REALM_STATUS':
        return {
          ...state,
          realmStatus: payload
        }

    case 'STORE_INPUT_VALUE':
        return {
          ...state,
          playerProfile: [payload]
        }

    case 'STORE_PET_LIST':
      return {
        ...state,
        petList: payload
      }


    default:
        return state;
  }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store
