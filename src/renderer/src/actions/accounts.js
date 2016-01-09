import jsonfile from 'jsonfile';
import remote from 'remote';
import { createAction } from 'redux-actions';

export const loadAccounts = () => {
  return dispatch => {
    const path = remote.getGlobal('accountFilePath');
    jsonfile.readFile(path, (err, accounts) => {
      const action = createAction('LOAD_ACCOUNTS');
      dispatch(action({accounts}));
    });
  };
};
