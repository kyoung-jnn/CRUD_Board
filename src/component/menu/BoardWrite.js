import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EditorComponent from "../EditorComponent.js";
import styled from "styled-components";

function BoardWrite(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onEditorChange = (value) => {
    setDesc(value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // props.dispatch(board_save(inputState));
    alert("저장");
    console.log(props)
  };

  return (
    <MainContainer>
      <UpperContainer>
        <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
          onChange={onTitleChange}
        />
        <EditorComponent value={desc} onChange={onEditorChange} />
      </UpperContainer>
      <LowerContainer>
        <SaveButton onClick={handleSave}>저장</SaveButton>
      </LowerContainer>
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

const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 90%;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 5%;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const LowerContainer = styled.div`
  width: 90%;
  height: 10%;
`;

const SaveButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: #3498db;
  color: #fff;
  font-weight: bold;
`;
export default connect()(BoardWrite); // dispatch 용
