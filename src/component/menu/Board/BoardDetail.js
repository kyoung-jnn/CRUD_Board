import React from "react";
import { connect } from "react-redux";

import { board_remove } from "../../../redux/action";
import { DefaultButton } from "../../modules/Button";
import styled from "styled-components";

const handleRemove = (brdnum) => {
  board_remove(brdnum);
};
function BoardDetail(props) {
  const { selectedBoard } = props; // mapReduxStateToReactProps 메소드 이용해서 reducer의 state 가져오기

  return (
    <MainContainer>
      <BoardContainer>
        <Title>
          <div>{selectedBoard.title}</div>
        </Title>
        <Writer>{selectedBoard.writer}</Writer>
        <Desc>{selectedBoard.desc}</Desc>
      </BoardContainer>
      <BottomContainer>
        <EditButton to="Write">수정하기</EditButton>
        <DeleteButton onClick={() => handleRemove(selectedBoard.brdnum)}>
          삭제하기
        </DeleteButton>
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

const BottomContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 90%;
  border-top: 1px solid #bdc3c7;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 30px;
  font-family: "KOTRA_BOLD-Bold", sans-serif;
`;
const Writer = styled.div`
  border-bottom: 1px solid #bdc3c7;
  font-size: 20px;
  font-family: "KOTRA_BOLD-Bold", sans-serif;
`;
const Desc = styled.article`
  height: "100%";
  margin-top: "5%";
  font-family: "NanumBarunGothic", sans-serif;
`;

const EditButton = styled(DefaultButton)`
  background-color: #0984e3;
`;

const DeleteButton = styled(DefaultButton)`
  background-color: #c0392b;
`;

// Reduecer의 state.boards를 boards로 받아주기
function mapReduxStateToReactProps(state) {
  console.log("BoardDetail mapReduxStateToReactProps\n", state);
  return { selectedBoard: state.selectedBoard };
}

export default connect(mapReduxStateToReactProps)(BoardDetail);
