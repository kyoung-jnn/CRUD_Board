import styled from "styled-components";

export const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10%;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  opacity: 1;
  transition-property: opacity;
  transition-duration: 1s;
  transition-timing-function: ease;

  &:hover {
    opacity: 0.7;
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: ease ;
  }
`;
