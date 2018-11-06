import { ESSAYS_LOAD } from './reducers';

import { getAllEssays } from '../../services/api';

export const loadEssays = () => {
  return {
    type: ESSAYS_LOAD,
    payload: getAllEssays()
  };
};