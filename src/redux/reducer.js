const USERSTATE_NAME = "NAME";
const USERSTATE_MODE = "MODE";

const BOARD_CREATE = "CREATE";
const BOARD_DELETE = "DELETE";
const BOARD_READ = "READ";

const userState = {
  name: "익명",
  mode: "day",
};

const boardState = {
  total: 3,
  boards: [
    {
      brdnum: 1,
      writer: "뉴비",
      title: "가입인사합니다~",
      desc: "안녕하세요~ 잘 부탁드려요 😁",
      date: new Date(),
    },
    {
      brdnum: 2,
      writer: "리잘알",
      title: "리액트?",
      desc: "리액트는 재밌어",
      date: new Date(),
    },
    {
      brdnum: 3,
      writer: "어그로",
      title: "들어오세요~~",
      desc: "나가세요 😊",
      date: new Date(),
    },
  ],
  selectedBoard: {},
};

// reducers
export function userState_ruducer(state = userState, action) {
  switch (action.type) {
    case USERSTATE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case USERSTATE_MODE: {
      return {
        ...state,
        mode: action.mode,
      };
    }
    default:
      return state;
  }
}

// CRUD 처리를 reducer 메소드에서 모두 처리
export function board_reducer(state = boardState, action) {
  let boards = state.boards;

  console.log("state\n", state);
  console.log("action\n", action);

  switch (action.type) {
    case BOARD_CREATE: {
      let data = action.data;
      let total = state.total;

      // 새로운 삽입
      if (data.brdnum === -1) {
        return {
          total: total + 1,
          boards: boards.concat({ ...data, brdnum: ++total, date: new Date() }),
          selectedBoard: {},
        };
      }

      // Update
      return {
        ...state,
        boards: boards.map((row) =>
          data.brdnum === row.brdnum ? { ...data } : row
        ),
        selectedBoard: {},
      };
    }
    case BOARD_DELETE: {
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
