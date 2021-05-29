import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./modules/theme";
import { GlobalStyles } from "./modules/GlobalStyles";

import Home from "./menu/Home";
import Board from "./menu/Board/Board";
import BoardDetail from "./menu/Board/BoardDetail";
import Setting from "./menu/Setting";
import Write from "./menu/Board/BoardWrite";

import "../font.css";

const handleChangeMenu = (index, setCurPage) => {
  setCurPage({ page: index });
};

function Main({ userState }) {
  const [curPage, setCurPage] = useState({ page: "/" });
  const [userMode, setUserMode] = useState(userState.mode);

  return (
    <ThemeProvider theme={userMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <OutterContainer></OutterContainer>

      <TitleText>REACT BOARD 📰</TitleText>

      <InnerContainer>
        <NavMenu>
          <ul>
            <NavList>
              <NavLink
                curpage={curPage.page}
                to="/"
                onClick={() => handleChangeMenu("/", setCurPage)}
              >
                홈
              </NavLink>
            </NavList>
            <NavList>
              <NavLink
                curpage={curPage.page}
                to="Board"
                onClick={() => handleChangeMenu("Board", setCurPage)}
              >
                자유게시판
              </NavLink>
            </NavList>
            <NavList>
              <NavGithub href="https://github.com/kyoung-jnn" target="_blank">
                깃허브
              </NavGithub>
            </NavList>

            <NavList>
              <NavLink
                curpage={curPage.page}
                to="Setting"
                onClick={() => handleChangeMenu("Setting", setCurPage)}
              >
                설정
              </NavLink>
            </NavList>
          </ul>
        </NavMenu>

        <Switch>
          <Route exact path="/" render={() => <Home></Home>}></Route>
          <Route path="/Board/:title" component={BoardDetail}></Route>
          <Route
            path="/Board"
            render={(props) => <Board props={props}></Board>}
          ></Route>
          <Route
            path="/Setting"
            render={() => (
              <Setting userMode={userMode} setUserMode={setUserMode}></Setting>
            )}
          ></Route>
          <Route
            path="/Write"
            render={(props) => <Write props={props}></Write>}
          ></Route>
        </Switch>
      </InnerContainer>
    </ThemeProvider>
  );
}

const OutterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const InnerContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 60%;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  box-shadow: 10px 10px 30px #fcfcfc;
  border-radius: 0px;
`;

const TitleText = styled.header`
  text-align: center;
  height: 10%;
  font-size: 45px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

const NavMenu = styled.nav`
  width: 100%;
  height: 10%;
`;

const NavList = styled.li`
  display: inline;
  margin: 10px;
  padding: 0px;
  height: 0px;
  font-size: 1.5rem;
  font-family: "KOTRA_BOLD-Bold", sans-serif;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.to === props.curpage
      ? props.theme.defaultText
      : props.theme.unlinkText};
  transition: color ease-in-out 0.3s;
  &:hover {
    color: ${({ theme }) => theme.linkHover};
    transition: color ease-in-out 0.3s;
  }
`;

const NavGithub = styled(NavLink.withComponent("a"))`
  color: #b2bec3;
`;

function mapReduxStateToReactProps(state) {
  return { userState: state.userState_ruducer };
}

export default connect(mapReduxStateToReactProps)(Main);
