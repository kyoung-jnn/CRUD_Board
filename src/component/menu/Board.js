import React, { Fragment } from "react";
import { connect } from "react-redux";
import BoardItem from "./BoardItem";
import BoardInputForm from "./BoardInputForm";

import styled from "styled-components";

function Home(props) {
  const { boards } = props; // mapReduxStateToReactProps 메소드 이용해서 reducer의 state 가져오기

  return (
    <Fragment>
      <BoardContainer>
        <Table>
          <tr>
            <TableNum>번호</TableNum>
            <TableTitle>제목</TableTitle>
            <TableWriter>작성자</TableWriter>
            <TableDate>날짜</TableDate>
          </tr>
          {boards.map((row) => (
            <BoardItem key={row.brdnum} row={row}></BoardItem>
          ))}
        </Table>
      </BoardContainer>
    </Fragment>
  );
}

const BoardContainer = styled.article`
  height: 80%;
  width: 100%;
  display: block;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
`;

const TableNum = styled.th`
  width: 10%;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

const TableTitle = styled.th`
  width: 40%;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

const TableWriter = styled.th`
  width: 20%;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

const TableDate = styled.th`
  width: 20%;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

// Reduecer의 state.boards를 boards로 받아주기
function mapReduxStateToReactProps(state) {
  console.log("Home mapReduxStateToReactProps\n", state);
  return { boards: state.boards };
}

export default connect(mapReduxStateToReactProps)(Home);
