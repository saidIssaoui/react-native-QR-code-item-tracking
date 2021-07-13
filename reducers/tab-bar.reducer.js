export const SHOW_TAB_BAR = 'SHOW_TAB_BAR';
export const HIDE_TAB_BAR = 'HIDE_TAB_BAR';

export default (state, {type}) => {
  switch (type) {
    case SHOW_TAB_BAR:
      return true;
    case HIDE_TAB_BAR:
      return false;
    default:
      return true;
  }
};
