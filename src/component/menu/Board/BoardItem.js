import React from "react";
import { board_read } from "../../../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";

function BoardItem({ row, dispatch }) {
  const handleDetail = (brdnum) => {
    dispatch(board_read(brdnum));
  };

  return (
    <thead>
      <tr style={{ height: 40, cursor: "pointer" }}>
        <td style={{ fontFamily: "NanumBarunGothic" }}>{row.brdnum}</td>
        <td style={{ fontFamily: "NanumBarunGothic", fontWeight: "bold" }}>
          <BoardLink
            to={`/Board/${row.brdnum}`}
            onClick={() => handleDetail(row.brdnum)}
          >
            {row.title}
          </BoardLink>
        </td>
        <td style={{ fontFamily: "NanumBarunGothic" }}>{row.writer}</td>
        <td style={{ fontFamily: "NanumBarunGothic" }}>
          {row.date.toLocaleDateString("kr-KR")}
        </td>
      </tr>
    </thead>
  );
}

const BoardLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.defaultText};
`;

export default connect()(BoardItem);
