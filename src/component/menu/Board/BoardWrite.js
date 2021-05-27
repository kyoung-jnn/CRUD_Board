import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { board_create } from "../../../redux/action";

import EditorComponent from "./EditorComponent.js";

import styled from "styled-components";
import { DefaultButton } from "../../modules/Button";

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

    if (selectedBoard.writer === userName) {
      const saveData = {
        brdnum: updateState ? selectedBoard.brdnum : -1,
        title: title,
        writer: userName,
        desc: desc,
        date: new Date(),
      };

      dispatch(board_create(saveData));

      props.history.push("/Board");
    }else{
      alert("수정 권환이 없습니다! 🙄 (다른 아이디)")
    }
  };

  // clean-up
  useEffect(() => {
    const unBlock = props.history.block("정말 떠나실 건가요?");

    return () => {
      unBlock();
    };
  }, [props.history]);

  useEffect(() => {
    if (updateState) {
      setTitle(selectedBoard.title);
      setDesc(title.desc);
    }
  }, []);

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
        <SaveButton to="Board" onClick={handleSave}>
          저장
        </SaveButton>
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

const TopContainer = styled.div`
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
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 10%;
  border-top: 1px solid #bdc3c7;
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
