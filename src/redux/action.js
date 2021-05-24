const USERSTATE_NAME = "NAME";
const USERSTATE_MODE = "MODE";

const BOARD_CREATE = "CREATE";
const BOARD_DELETE = "DELETE";
const BOARD_READ = "READ";
const BOARD_LIST = "LIST";

export const change_name = (name) => ({ type: USERSTATE_NAME, name });
export const change_mode = (mode) => ({ type: USERSTATE_MODE, mode });

export const board_create = (data) => ({ type: BOARD_CREATE, data });
export const board_delete = (brdnum) => ({
  type: BOARD_DELETE,
  brdnum: brdnum,
});
export const board_read = (brdnum) => ({ type: BOARD_READ, brdnum: brdnum });
export const board_list = () => ({ type: BOARD_LIST });
