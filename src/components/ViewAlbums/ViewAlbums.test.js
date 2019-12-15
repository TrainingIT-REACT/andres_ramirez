import React from 'react';
import {
  mount
} from 'enzyme';
import ViewAlbums from './index';
import { SERVER_ACTIONS } from '../../actions/server';
import { store } from "../../store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";



describe("ViewAlbums", () => {
  function getAlbumsAction() {
    return {
      type: `${SERVER_ACTIONS.GET_ALBUMS}_FULFILLED`,
      payload: {
        type: `${SERVER_ACTIONS.GET_ALBUMS}`,
        payload: [{ 
          "id": 1, 
          "name": "Chip off the old block", 
          "artist": "Blair", 
          "cover": "/images/cover.jpg" }]
      }
    }
  }
  beforeEach(() => {
    // Dispatching server all actions to Store
    store.dispatch(getAlbumsAction())
  })

  it("Should have one child", () => {
    const wrapper = mount( 
      <Provider {...{ store }}>
        <Router>
          <ViewAlbums /> 
        </Router>
      </Provider>
    )
    expect(wrapper.find('div[data-test="album-name"]').text()).toBe("Chip off the old block")
  })
})