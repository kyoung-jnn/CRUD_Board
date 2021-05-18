import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BoardItem from "./BoardItem";

import styled from "styled-components";

function BoardDetail(props) {
  const { boards } = props; // mapReduxStateToReactProps 메소드 이용해서 reducer의 state 가져오기

  return (
    <MainContainer>
      <BoardContainer></BoardContainer>
      <BottomContainer>
        <EditButton to="Write">수정하기</EditButton>
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
  margin: 0;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  width: 90%;
  border-top: 1px solid #bdc3c7;
`;

const EditButton = styled(Link)`
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

// Reduecer의 state.boards를 boards로 받아주기
function mapReduxStateToReactProps(state) {
  console.log("Home mapReduxStateToReactProps\n", state);
  return { boards: state.boards };
}

export default connect(mapReduxStateToReactProps)(BoardDetail);
