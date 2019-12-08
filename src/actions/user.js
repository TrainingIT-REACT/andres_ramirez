export const USER_ACTIONS = {
  SET_USER_PROPERTIES: "SET_USER_PROPERTIES",
}

/**
 * Action for setting user properties in Redux
 * IMPORTANT: We will consider once we launch these properties, that the
 * user will be SignedIn. Injecting property here
 * @param {Object} properties Object which contains user properties
 *                            such as name
 */
export function setUserProperties(properties) {
  return {
    type: USER_ACTIONS.SET_USER_PROPERTIES,
    properties: {
      ...properties,
      signedIn: true
    }
  }
}