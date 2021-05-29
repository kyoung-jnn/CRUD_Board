import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { board_delete } from "../../../redux/action";

import styled from "styled-components";
import { DefaultButton } from "../../modules/Button";
import { MainContainer, BottomContainer } from "../../modules/Container";

const handleRemove = (history, dispatch, brdnum) => {
  dispatch(board_delete(brdnum));
  history.push("/Board");
};

function BoardDetail(props) {
  const { history, dispatch, selectedBoard } = props; // mapReduxStateToReactProps 메소드 이용해서 reducer의 state 가져오기

  return (
    <MainContainer>
      <SubContainer>
        <Title>
          <div>{selectedBoard.title}</div>
        </Title>
        <Writer>{selectedBoard.writer}</Writer>
        <Desc dangerouslySetInnerHTML={{ __html: selectedBoard.desc }}></Desc>
      </SubContainer>
      <BottomContainer>
        <EditButton to="/Write">수정하기</EditButton>
        <DeleteButton
          onClick={() => handleRemove(history, dispatch, selectedBoard.brdnum)}
        >
          삭제하기
        </DeleteButton>
      </BottomContainer>
    </MainContainer>
  );
}

const SubContainer = styled.section`
  height: 90%;
  width: 90%;
`;

const Title = styled.article`
  height: 10%;
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 30px;
  font-family: "KOTRA_BOLD-Bold", sans-serif;
  color: ${(props) => props.theme.defaultText};
`;
const Writer = styled.article`
  height: 5%;
  border-bottom: 1px solid #bdc3c7;
  padding-bottom: 3%;
  font-size: 20px;
  font-family: "KOTRA_BOLD-Bold", sans-serif;
  color: ${(props) => props.theme.defaultText};
`;
const Desc = styled.div`
  height: 76%;
  padding: 3%;
  font-size: 1.2em;
  font-family: "NanumBarunGothic", sans-serif;
  color: ${(props) => props.theme.defaultText};
`;

const EditButton = styled(DefaultButton.withComponent(Link))`
  text-decoration: none;
  background-color: #0984e3;
`;

const DeleteButton = styled(DefaultButton)`
  background-color: #c0392b;
`;

// Reduecer의 state.boards를 boards로 받아주기
function mapReduxStateToReactProps(state) {
  return { selectedBoard: state.board_reducer.selectedBoard };
}

export default connect(mapReduxStateToReactProps)(BoardDetail);
