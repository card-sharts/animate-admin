export const ESSAYS_LOAD = 'ESSAYS_LOAD';

export const getEssays = state => state.essays;

export function essays(state = [], { type, payload }) {
  switch(type) {
    case ESSAYS_LOAD:
      return payload;
    default:
      return state;
  }
}