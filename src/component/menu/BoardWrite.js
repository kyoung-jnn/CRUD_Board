import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EditorComponent from "../EditorComponent.js";
import styled from "styled-components";

function BoardWrite(props) {
  const [desc, setDesc] = useState("");
  function onEditorChange(value) {
    setDesc(value);
  }

  return (
    <Main>
      <EditorComponent value={desc} onChange={onEditorChange} />
    </Main>
  );
}

const Main = styled.article`
  display: flex;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

export default connect()(BoardWrite); // dispatch 용
