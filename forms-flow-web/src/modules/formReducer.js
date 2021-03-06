import ACTION_CONSTANTS from "../actions/actionConstants";

const initialState = {
  formSubMissionDelete:{modalOpen:false,submissionId:"",formId:""},
  formDelete:{modalOpen:false,formId:"",formName:""}
}

export default (state = initialState, action)=> {
  switch (action.type) {
    case ACTION_CONSTANTS.FORM_SUBMISSION_DELETE:
      return {...state, formSubMissionDelete: action.payload};
    case ACTION_CONSTANTS.FORM_DELETE:
      return {...state, formDelete: action.payload};
    default:
      return state;
  }
}

