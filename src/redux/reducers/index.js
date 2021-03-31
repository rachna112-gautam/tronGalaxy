import {
  ACCOUNT_UPDATE,
  CONTRACT_LOADED,
  ON_PERSONAL_DATA_LOADED
} from "../constants/action-types";

const initialState = {
  account: null,
  blockchainClient: null,
  myData: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_UPDATE:

      return Object.assign({}, state, {
        account: action.payload,
      });

    case CONTRACT_LOADED:
      // console.log("contract in reducer is------->",action.payload)
      return Object.assign({}, state, {
        contract: action.payload,
      });

    case ON_PERSONAL_DATA_LOADED:
      console.log("personalData--->", action.payload)
      return Object.assign({}, state, {
        personalData: action.payload,
      });


    default: {
      return state;
    }
  }
}

export default rootReducer;
