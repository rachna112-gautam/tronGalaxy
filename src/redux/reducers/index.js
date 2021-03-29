import { act } from "react-dom/test-utils";
import {
  ACCOUNT_UPDATE,
  CONTRACT_LOADED,
  ON_PERSONAL_DATA_LOADED,
  ON_CONTRACT_DATA_LOADED,
} from "../constants/action-types";

const initialState = {
  account: null,
  blockchainClient: null,
  myData: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_UPDATE:
      console.log("acc update--->", action.payload)
      return Object.assign({}, state, {
        account: action.payload,
      });

    case CONTRACT_LOADED:
      return Object.assign({}, state, {
        contract: action.payload,
      });

    case ON_PERSONAL_DATA_LOADED:
      console.log("personal data--->", action.payload)
      return Object.assign({}, state, {
        personalData: action.payload,
      });

    case ON_CONTRACT_DATA_LOADED:
      console.log('contract loaded reducer--->', action.payload)
      return Object.assign({}, state, {
        contractData: action.payload,
      });

    default: {
      return state;
    }
  }
}

export default rootReducer;
