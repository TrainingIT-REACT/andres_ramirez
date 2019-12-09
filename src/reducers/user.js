import {
  USER_ACTIONS
} from "../actions/user"

const initialState = {
  signedIn: false
}

/**
 * Reducer for user properties
 * @param {Object} state current state
 * @param {Object} action action
 */
export const userReducer = (state = initialState, action) => {
  const {
    type
  } = action;
  switch (type) {
    case USER_ACTIONS.SET_USER_PROPERTIES:
      const {
        properties
      } = action;
      return {
        ...state,
        ...properties
      }
      default:
        return state
  }
}