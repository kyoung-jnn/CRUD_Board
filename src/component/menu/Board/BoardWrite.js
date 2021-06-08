import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { MainContainer, BottomContainer } from "../../modules/Container";
import EditorComponent from "./EditorComponent.js";

import { DefaultButton } from "../../modules/Button";

import { board_create } from "../../../redux/action";

function BoardWrite({ props, dispatch, selectedBoard, userName }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const updateState = Object.keys(selectedBoard).length === 0 ? false : true;

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onEditorChange = (value) => {
    setDesc(value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const saveData = {
      brdnum: updateState ? selectedBoard.brdnum : -1,
      title: title,
      writer: userName,
      desc: desc,
      date: new Date(),
    };
    dispatch(board_create(saveData));
    props.history.push("/CRUD_Board/Board");
  };

  // clean-up
  useEffect(() => {
    const unBlock = props.history.block("글쓰기를 종료할까요?");

    return () => {
      unBlock();
    };
  }, [props.history]);

  useEffect(() => {
    if (updateState) {
      setTitle(selectedBoard.title);
      setDesc(selectedBoard.desc);
    }
  }, [updateState, selectedBoard]);

  return (
    <MainContainer>
      <TopContainer>
        <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
          onChange={onTitleChange}
        />
        <EditorComponent value={desc} onChange={onEditorChange} />
      </TopContainer>
      <BottomContainer>
        <SaveButton to="/CRUD_Board/Board" onClick={handleSave}>
          저장
        </SaveButton>
      </BottomContainer>
    </MainContainer>
  );
}

const TopContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 90%;
`;

const TitleInput = styled.input`
  width: 98%;
  height: 5%;
  margin-bottom: 10px;
  color: ${(props) => props.theme.defaultText};
`;

const SaveButton = styled(DefaultButton.withComponent(Link))`
  text-decoration: none;
  background-color: #0984e3;
`;

// Reduecer의 state.boards를 boards로 받아주기
function mapReduxStateToReactProps(state) {
  return {
    selectedBoard: state.board_reducer.selectedBoard,
    userName: state.userState_ruducer.name,
  };
}

export default connect(mapReduxStateToReactProps)(BoardWrite);
