import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import BoardList from "./BoardList";
import BoradDetail from "./BoardDetail";

function Board({ props }) {
  return (
    <Fragment>
      <Route
        exact
        path={props.match.path}
        render={(props) => <BoardList props={props}></BoardList>}
      />
      <Route
        path={`${props.match.path}/:id`}
        render={(props) => <BoradDetail props={props}></BoradDetail>}
      />
    </Fragment>
  );
}

export default Board;
