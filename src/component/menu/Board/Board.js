import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BoardItem from "./BoardItem";

import styled from "styled-components";

function Board(props) {
  const { boards } = props; // mapReduxStateToReactProps 메소드 이용해서 reducer의 state 가져오기

  return (
    <MainContainer>
      <BoardContainer>
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
      </BoardContainer>
      <BottomContainer>
        <SaveButton to="Write">글쓰기</SaveButton>
      </BottomContainer>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const BoardContainer = styled.div`
  height: 90%;
  width: 90%;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  width: 90%;
  border-top: 1px solid #bdc3c7;
`;

const SaveButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60%;
  border-radius: 5px;
  border: 0;
  text-decoration: none;
  background-color: #0984e3;
  color: #fff;
  font-weight: bold;
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
  return { boards: state.boards };
}

export default connect(mapReduxStateToReactProps)(Board);
