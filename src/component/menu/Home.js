import React from "react";

import styled from "styled-components";

import { MainContainer, SubContainer } from "../modules/Container";

function Home() {
  return (
    <HomeContainer>
      <SubContainer>
        <TitleText
          style={{
            fontSize: 30,
          }}
        >
          토이 프로젝트 <span role="img">🎉</span>
        </TitleText>
        <ContentText
          style={{
            fontSize: 20,
          }}
        >
          react를 이용한 게시판입니다. <span role="img">😊</span>
        </ContentText>
      </SubContainer>

      <SubContainer>
        <TitleText
          style={{
            fontSize: 30,
          }}
        >
          기술 스택 <span role="img">🔧</span>
        </TitleText>
        <article>
          <ContentText>React</ContentText>
          <ContentText>Redux</ContentText>
          <ContentText>styled-component</ContentText>
        </article>
      </SubContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled(MainContainer)`
  align-items: flex-start;
`;

const TitleText = styled.article`
  font-family: "KOTRA_BOLD-Bold";
  color: ${(props) => props.theme.defaultText};
`;

const ContentText = styled.p`
  font-family: "NanumBarunGothic";
  color: ${(props) => props.theme.defaultText};
`;

export default Home;
