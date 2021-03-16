import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

function BoardWrite(props) {
  return (
      <div>글쓰기</div>
  )
}

export default connect()(BoardWrite); // dispatch 용
