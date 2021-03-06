import React from "react";
import { Fragment } from "react";

import styled from "styled-components";

function Home() {
  return (
    <Fragment>
      <Main>
        <ExplainContainer>
          <body
            style={{
              fontSize: 30,
              fontFamily: "KOTRA_BOLD-Bold",
            }}
          >
            토이 프로젝트
          </body>
          <body
            style={{
              fontSize: 20,
              fontFamily: "NanumBarunGothic",
            }}
          >
            react를 이용한 게시판입니다. 😊
          </body>
        </ExplainContainer>

        <StackContainer>
          <body
            style={{
              fontSize: 30,
              fontFamily: "KOTRA_BOLD-Bold",
            }}
          >
            기술 스택
          </body>
          <body>react</body>
          <body>redux</body>
          <body>styled-component</body>
        </StackContainer>
      </Main>
    </Fragment>
  );
}

const Main = styled.article`
  display: block;
  width: 100%;
  height: 80%;
  padding: 20;
`;
const ExplainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 30%;
`;

const StackContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  height: 30%;
`;

export default Home;
