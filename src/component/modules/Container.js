import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const SubContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  margin-left: 10%;
`;

const BottomContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 90%;
  border-top: 1px solid #bdc3c7;
`;

export { MainContainer, SubContainer, BottomContainer };
