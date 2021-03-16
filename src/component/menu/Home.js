import React from "react";

import styled from "styled-components";

function Home() {
  return (
    <Main>
      <ExplainContainer>
        <body
          style={{
            fontSize: 30,
            fontFamily: "KOTRA_BOLD-Bold",
          }}
        >
          토이 프로젝트 🎉
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
          기술 스택 🔧
        </body>
        <body>
          <p
            style={{
              fontSize: 18,
              fontFamily: "NanumBarunGothic",
            }}
          >
            React
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "NanumBarunGothic",
            }}
          >
            Redux
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "NanumBarunGothic",
            }}
          >
            styled-component
          </p>
        </body>
      </StackContainer>
    </Main>
  );
}

const Main = styled.article`
  width: 100%;
  height: 80%;
`;

const ExplainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 50%;
  margin-left: 10%;
`;

const StackContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 50%;
  margin-left: 10%;
`;

export default Home;
