const BOARD_SAVE = "SAVE";
const BOARD_REMOVE = "REMOVE";
const BOARD_READ = "ONE";
const BOARD_LIST = "LIST";

export const board_save = (data) => ({ type: BOARD_SAVE, data });
export const board_remove = (brdnum) => ({
  type: BOARD_REMOVE,
  brdnum: brdnum,
});
export const board_read = (brdnum) => ({ type: BOARD_READ, brdnum: brdnum });
export const board_list = () => ({ type: BOARD_LIST });