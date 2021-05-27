import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { board_read } from "../../../redux/action";

import { DefaultButton } from "../../modules/Button";
import { MainContainer, BottomContainer } from "../../modules/Container";
import BoardItem from "./BoardItem";

function Board({ boards, dispatch, selectedBoard }) {
  useEffect(() => {
    dispatch(board_read(-1));
  }, []);

  return (
    <MainContainer>
      <SubContainer>
        <Table>
          <thead>
            <tr style={{ height: 60 }}>
              <TableNum>번호</TableNum>
              <TableTitle>제목</TableTitle>
              <TableWriter>작성자</TableWriter>
              <TableDate>날짜</TableDate>
            </tr>
          </thead>
          {boards.map((row) => (
            <BoardItem key={row.brdnum} row={row}></BoardItem>
          ))}
        </Table>
      </SubContainer>
      <BottomContainer>
        <SaveButton to="Write">글쓰기</SaveButton>
      </BottomContainer>
    </MainContainer>
  );
}

const SubContainer = styled.section`
  height: 90%;
  width: 90%;
`;

const SaveButton = styled(DefaultButton.withComponent(Link))`
  text-decoration: none;
  background-color: #0984e3;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
`;

const TableNum = styled.th`
  width: 10%;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

const TableTitle = styled.th`
  width: 40%;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

const TableWriter = styled.th`
  width: 20%;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

const TableDate = styled.th`
  width: 20%;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

// Reduecer의 state.boards를 boards로 받아주기
function mapReduxStateToReactProps(state) {
  return {
    boards: state.board_reducer.boards,
    selectedBoard: state.board_reducer.selectedBoard,
  };
}

export default connect(mapReduxStateToReactProps)(Board);
