const BOARD_SAVE = "SAVE";
const BOARD_REMOVE = "REMOVE";
const BOARD_READ = "ONE";
const BOARD_LIST = "LIST";

export const board_save = (data) => ({ type: BOARD_SAVE, data });
export const board_remove = (brdno) => ({ type: BOARD_REMOVE, brdno: brdno });
export const board_read = (brdno) => ({ type: BOARD_READ, brdno: brdno });
export const board_list = () => ({ type: BOARD_LIST });

const initialState = {
  total: 2,
  boards: [
    {
      brdnum: 1,
      writer: "Kyo",
      title: "Hello",
      desc: "HI",
      date: new Date(),
    },
    {
      brdnum: 2,
      writer: "Roh",
      title: "Good bye",
      desc: "GG",
      date: new Date(),
    },
  ],
  selectedBoard: {},
};

// reducer
// CRUD 처리
export default function board_reducer(state = initialState, action) {
  let boards = state.boards;

  console.log('state\n',state);
  console.log('action\n',action);

  switch (action.type) {
    case BOARD_SAVE: {
      let data = action.data;
      let total = state.total;

      // 새로운 삽입
      if (!data.brdno) {
        return {
          total: total + 1,
          boards: boards.concat({ ...data, brdnum: total, date: new Date() }),
          selectedBoard: {},
        };
      }

      return {
        ...state,
        boards: boards.map((row) =>
          data.brdnum === row.brdnum ? { ...data } : row
        ),
        selectedBoard: {},
      };
    }
    case BOARD_REMOVE:
      // 삭제할 row 빼고 다시 배열로 만들기
      return {
        ...state,
        boards: boards.filter(row => row.brdnum !== action.brdnum),
        selectedBoard: {},
      };
    case BOARD_READ:
      return {
        ...state,
        selectedBoard: boards.find((row) => row.brdnum === action.brdnum),
      };
    default:
      return state;
  }
}
