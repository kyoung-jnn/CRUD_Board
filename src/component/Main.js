import React, { useState, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import Home from "./menu/Home";
import Board from "./menu/Board/Board";
import BoardDetail from "./menu/Board/BoardDetail";
import Setting from "./menu/Setting";
import Write from "./menu/Board/BoardWrite";

import "../font.css";

const handleChangeMenu = (index, setCurPage) => {
  setCurPage({ page: index });
};

function Main() {
  const [curPage, setCurPage] = useState({ page: "/" });
  return (
    <Fragment>
      <TitleText>REACT BOARD 📰</TitleText>

      <MainContainer>
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
          <Route path="/Setting" render={() => <Setting></Setting>}></Route>
          <Route
            path="/Write"
            render={(props) => <Write props={props}></Write>}
          ></Route>
        </Switch>
      </MainContainer>
    </Fragment>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 60%;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  box-shadow: 10px 10px 60px #bababa, -10px -10px 60px #fcfcfc;
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
  font-size: 25px;
  font-family: "KOTRA_BOLD-Bold", sans-serif;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.to === props.curpage ? "#000" : "#b2bec3")};
  transition: color ease-in-out 0.3s;
  &:hover {
    color: #2d3436;
    transition: color ease-in-out 0.3s;
  }
`;

const NavGithub = styled(NavLink.withComponent("a"))`
  color: #b2bec3;
`;

export default Main;
