import React, { useState } from "react";
import { connect } from "react-redux";

import styled, { keyframes } from "styled-components";
import { DefaultButton } from "../modules/Button";
import { MainContainer, SubContainer } from "../modules/Container";

import { change_name } from "../../redux/action";

const Setting = ({ dispatch, userState }) => {
  const [userName, setUseName] = useState(userState.name);
  const [userMode, setUserMode] = useState(userState.mode);

  const handleChange = (e) => {
    setUseName(e.target.value);
  };

  const handleToggle = () => {};
  const handleSaveName = () => {
    if (window.confirm(userName + " 으로 아이디를 변경할까요? 🤔") === true) {
      dispatch(change_name(userName));
    }
  };

  return (
    <SettingContainer>
      <SubContainer>
        <div
          style={{
            fontSize: 30,
            fontFamily: "KOTRA_BOLD-Bold",
          }}
        >
          아이디 설정
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <NameInput
            type="text"
            value={userName}
            onChange={handleChange}
          ></NameInput>
          <ConfirmButton onClick={handleSaveName}>변경</ConfirmButton>
        </div>
      </SubContainer>
      <SubContainer>
        <div
          style={{
            fontSize: 30,
            fontFamily: "KOTRA_BOLD-Bold",
          }}
        >
          야간모드
        </div>
        <input
          type="checkbox"
          checked={userMode}
          onChange={handleToggle}
        ></input>
      </SubContainer>
    </SettingContainer>
  );
};

const SettingContainer = styled(MainContainer)`
  align-items: flex-start;
`;

const NameInput = styled.input`
  font-size: 1rem;

  padding: 0.5rem;
  outline: none;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-width: 0.3rem;

  border-color: #bdc3c7;
  transition-property: border-color;
  transition-duration: 1s;
  transition-timing-function: ease-out;

  &:hover {
    border-color: #2980b9;
    transition-property: border-color;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }
  &:focus {
    border-color: #2980b9;
  }
`;

const ConfirmButton = styled(DefaultButton)`
  width: 4rem;
  height: 2rem;
  font-size: 1rem;
  background-color: #0984e3;
  margin-left: 1rem;
`;

function mapReduxStateToReactProps(state) {
  return { userState: state.userState_ruducer };
}

export default connect(mapReduxStateToReactProps)(Setting);
