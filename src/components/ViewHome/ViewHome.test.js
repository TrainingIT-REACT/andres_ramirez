import React from 'react';
import {
  mount
} from 'enzyme';
import ViewHome from './index';
import { Provider } from 'react-redux';
import { store } from "../../store";
import { SERVER_ACTIONS } from '../../actions/server';
 
describe("ViewHome", () => {


  // We need to mock server call actions
  function getSongsAction() {
    return {
      type: `${SERVER_ACTIONS.GET_SONGS}_FULFILLED`,
      payload: {
        type: `${SERVER_ACTIONS.GET_SONGS}`,
        payload: [{
          "id": 1,
          "name": "Take On Me",
          "audio": "/music/funky_energy_loop.mp3",
          "seconds": 203,
          "album_id": 1
        }]
      }
    }
  }

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

  let wrapper = null
  beforeEach(() => {
    // Dispatching server all actions to Store
    store.dispatch(getAlbumsAction())
    store.dispatch(getSongsAction())
    wrapper = mount( 
      <Provider {...{ store }}>
        < ViewHome /> 
      </Provider>
    )

  })
  it("Should have one child", () => {
    expect(wrapper.find('div[data-test="song-name"]').text()).toBe("Take On Me")
  })
})