import * as ActionTypes from "./ActionTypes";

export const Documents = (
    state = {
      errMess: null,
      documents: [],
    },
    action 
  ) => {
    switch (action.type) {
      
      case ActionTypes.DOCUMENT_ADD:
        return {
          ...state,
          errMess: action.payload,
          documents: [],
        };
  
      default:
        return state;
    }
  };
