import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { MainContainer, BottomContainer } from "../../modules/Container";
import { DefaultButton } from "../../modules/Button";

import { board_delete } from "../../../redux/action";

function BoardDetail({ props, dispatch, selectedBoard, userName }) {
  const handleEdit = () => {
    if (selectedBoard.writer === userName) {
      props.history.push("/Write");
    } else {
      alert("수정 권한이 없습니다! 🙄 (다른 아이디)");
    }
  };

  const handleRemove = (e) => {
    if (selectedBoard.writer === userName) {
      if (window.confirm("현재 글을 삭제할까요?") === true) {
        dispatch(board_delete(selectedBoard.brdnum));
        props.history.push("/Board");
      }
    } else {
      alert("삭제 권한이 없습니다! 🙄 (다른 아이디)");
    }
  };

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
        <EditButton onClick={handleEdit}>수정하기</EditButton>
        <DeleteButton onClick={handleRemove}>삭제하기</DeleteButton>
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

const EditButton = styled(DefaultButton)`
  background-color: #0984e3;
`;

const DeleteButton = styled(DefaultButton)`
  background-color: #c0392b;
`;

// Reduecer의 state.boards를 boards로 받아주기
function mapReduxStateToReactProps(state) {
  return {
    selectedBoard: state.board_reducer.selectedBoard,
    userName: state.userState_ruducer.name,
  };
}

export default connect(mapReduxStateToReactProps)(BoardDetail);
