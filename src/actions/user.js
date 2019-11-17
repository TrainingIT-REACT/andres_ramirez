export const USER_ACTIONS = {
  SET_USER_PROPERTIES: "SET_USER_PROPERTIES",
}

/**
 * Action for setting user properties in Redux
 * @param {Object} properties Object which contains user properties
 *                            such as name
 */
export function setUserProperties(properties) {
  return {
    type: USER_ACTIONS.SET_USER_PROPERTIES,
    properties
  }
}