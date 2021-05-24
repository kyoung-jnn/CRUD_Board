import React from "react";

import styled from "styled-components";

import { MainContainer, SubContainer } from "../modules/Container";

function Home() {
  return (
    <HomeContainer>
      <SubContainer>
        <article
          style={{
            fontSize: 30,
            fontFamily: "KOTRA_BOLD-Bold",
          }}
        >
          토이 프로젝트 <span role="img">🎉</span>
        </article>
        <article
          style={{
            fontSize: 20,
            fontFamily: "NanumBarunGothic",
          }}
        >
          react를 이용한 게시판입니다. <span role="img">😊</span>
        </article>
      </SubContainer>

      <SubContainer>
        <article
          style={{
            fontSize: 30,
            fontFamily: "KOTRA_BOLD-Bold",
          }}
        >
          기술 스택 <span role="img">🔧</span>
        </article>
        <article>
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
        </article>
      </SubContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled(MainContainer)`
  align-items: flex-start;
`;

export default Home;
