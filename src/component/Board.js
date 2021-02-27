import React,{ Fragment } from "react";
import "../App.css";
import { connect } from "react-redux";
import BoardItem from "./BoardItem";
import BoardInputForm from "./BoardInputForm";

import styled from "styled-components";

function Home(props) {
  const { boards } = props; // mapReduxStateToReactProps 메소드 이용해서 reducer의 state 가져오기

  return (
    <Fragment>
      <article>
        <table className="table">
          <thead>
            <tr>
              <th className="Num">번호</th>
              <th className="Title">제목</th>
              <th className="Writer">작성자</th>
              <th className="Date">날짜</th>
              <th className="Del">삭제</th>
            </tr>
          </thead>
          {boards.map((row) => (
            <BoardItem key={row.brdnum} row={row}></BoardItem>
          ))}
        </table>
      </article>
      <BoardInputForm></BoardInputForm>
    </Fragment>
  );
}

// Reduecer의 state.boards를 boards로 받아주기
function mapReduxStateToReactProps(state) {
  console.log("Home mapReduxStateToReactProps\n", state);
  return { boards: state.boards };
}

export default connect(mapReduxStateToReactProps)(Home);
