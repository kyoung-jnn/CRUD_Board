import styled from "styled-components";

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  position: relative;
  width: 55px;
  height: 28px;
  cursor: pointer;
  border-radius: 50px;

  background-color: #bdc3c7;
  ${SwitchInput}:checked + & {
    background-color: #0984e3;
  }
  transition: background-color 0.4s ease;
`;

export const SwitchBall = styled.div`
  position: absolute;
  top: 6%;
  left: 4%;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  ${SwitchInput}:checked + ${SwitchLabel} & {
    transform: translateX(26px);
  }
  transition: transform 0.4s ease;
`;
