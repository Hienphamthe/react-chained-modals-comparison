import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from '../src/actions.js';


const mockStore = configureMockStore([thunk]);

describe('actions', () => {
  // describe('gotoDone', () => {
  //   it('runs without error', (done) => {
  //     const store = mockStore({});
  //     store.dispatch(gotoDone())
  //       .then(() => {
  //         done();
  //       });
  //   });
  // });

  // normally the request would be mocked with a library such as nock
  // but I am just simulating the request
  describe('storeName', () => {
    it('creates action on failure', (done) => {
      const expectedActions = [
        {type: actions.STORE_NAME_REQUESTED},
        {type: actions.STORE_NAME_FAILED, errorMsg: 'Specify first and last name.'}
      ];
      const store = mockStore({}, expectedActions, done);
      store.dispatch(actions.storeName('Onlyone'));
    });
  });
});
