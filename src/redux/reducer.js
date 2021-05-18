const BOARD_SAVE = "SAVE";
const BOARD_REMOVE = "REMOVE";
const BOARD_READ = "ONE";
const BOARD_LIST = "LIST";

const initialState = {
  total: 2,
  boards: [
    {
      brdnum: 1,
      writer: "Kyo",
      title: "Hello",
      desc: "안녕하세요~",
      date: new Date(),
    },
    {
      brdnum: 2,
      writer: "Roh",
      title: "Good bye",
      desc: "😁",
      date: new Date(),
    },
  ],
  selectedBoard: {},
};

// reducer
// CRUD 처리를 reducer 메소드에서 모두 처리
export default function board_reducer(state = initialState, action) {
  let boards = state.boards;

  console.log("state\n", state);
  console.log("action\n", action);

  switch (action.type) {
    case BOARD_SAVE: {
      let data = action.data;
      let total = state.total;

      // 새로운 삽입
      if (!data.brdnum) {
        return {
          total: total + 1,
          boards: boards.concat({ brdnum: ++total, ...data, date: new Date() }),
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
    case BOARD_REMOVE: {
      let total = state.total;
      let initNum = 1;
      // 삭제할 row 빼고 다시 배열로 만들기
      return {
        total: total - 1,
        boards: boards
          .filter((row) => row.brdnum !== action.brdnum)
          .map((row) => {
            row.brdnum = initNum++;
            if (initNum === total) initNum = 1;
            return row;
          }),
        selectedBoard: {},
      };
    }
    case BOARD_READ:
      return {
        ...state,
        selectedBoard: boards.find((row) => row.brdnum === action.brdnum),
      };
    default:
      return state;
  }
}
