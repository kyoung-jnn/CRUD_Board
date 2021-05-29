import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  main,div,input {
    background-color: ${({ theme }) => theme.background};
    transition: all 0.4s linear;
  }
  header,li,th,td{
    color: ${({ theme }) => theme.defaultText};
  }
`;
