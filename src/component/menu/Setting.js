import React, { useState } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import { DefaultButton } from "../modules/Button";
import { MainContainer, SubContainer } from "../modules/Container";
import { SwitchInput, SwitchLabel, SwitchBall } from "../modules/SwitchButton";

import { change_name } from "../../redux/action";

const Setting = ({ dispatch, userState, userMode, setUserMode }) => {
  const [userName, setUseName] = useState(userState.name);

  const handleChange = (e) => {
    setUseName(e.target.value);
  };

  const handleToggle = (e) => {
    setUserMode(e.target.checked);
  };

  const handleSaveName = () => {
    if (window.confirm(userName + " 으로 아이디를 변경할까요? 🤔") === true) {
      dispatch(change_name(userName));
    }
  };

  return (
    <SettingContainer>
      <SubContainer>
        <TitleText
          style={{
            fontSize: 30,
          }}
        >
          아이디 설정
        </TitleText>
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
        <TitleText
          style={{
            fontSize: 30,
          }}
        >
          야간모드
        </TitleText>
        <SwitchInput
          type="checkbox"
          checked={userMode}
          onChange={handleToggle}
          id="switch-input"
        ></SwitchInput>
        <SwitchLabel htmlFor="switch-input">
          <SwitchBall></SwitchBall>
        </SwitchLabel>
      </SubContainer>
    </SettingContainer>
  );
};

const SettingContainer = styled(MainContainer)`
  align-items: flex-start;
`;

const NameInput = styled.input`
  padding: 0.5rem;
  outline: none;

  font-size: 1rem;
  color: ${(props) => props.theme.defaultText};

  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-width: 0.3rem;
  border-color: #bdc3c7;
  transition: border-color 1s ease-out;
  &:hover {
    border-color: #2980b9;
    transition: border-color 1s ease-out;
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

const TitleText = styled.article`
  font-family: "KOTRA_BOLD-Bold";
  color: ${(props) => props.theme.defaultText};
`;

function mapReduxStateToReactProps(state) {
  return { userState: state.userState_ruducer };
}

export default connect(mapReduxStateToReactProps)(Setting);
