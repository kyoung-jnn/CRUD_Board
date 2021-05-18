import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EditorComponent from "./EditorComponent.js";

import { board_save } from "../../../redux/action";
import styled from "styled-components";

function BoardWrite({ props, dispatch }) {
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
    const saveData = {
      title: title,
      writer: "Jin",
      desc: desc,
      date: "",
    };

    dispatch(board_save(saveData));

    props.history.push("/Board");
  };

  // clean-up
  useEffect(() => {
    const unBlock = props.history.block("정말 떠나실 건가요?");

    return () => {
      unBlock();
    };
  }, [props.history]);

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

export default connect()(BoardWrite);
