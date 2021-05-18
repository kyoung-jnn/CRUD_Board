import React from "react";
import { board_read, board_remove } from "../../../redux/action";
import { connect } from "react-redux";

import styled from "styled-components";

function BoardItem({ props, row, dispatch }) {
  const handleDetailForm = (brdnum) => {
    dispatch(board_read(brdnum));
    props.history.push("/BoardDetail");
  };

  return (
    <thead>
      <tr style={{ height: 40, cursor: "pointer" }}>
        <td style={{ fontFamily: "NanumBarunGothic" }}>{row.brdnum}</td>
        <td style={{ fontFamily: "NanumBarunGothic", fontWeight: "bold" }}>
          <a onClick={() => handleDetailForm(row.brdnum)}>{row.title}</a>
        </td>
        <td style={{ fontFamily: "NanumBarunGothic" }}>{row.writer}</td>
        <td style={{ fontFamily: "NanumBarunGothic" }}>
          {row.date.toLocaleDateString("kr-KR")}
        </td>
        {/* <td style={{border:0}}>
        <button
          className="delBtn"
          onClick={() => {
            props.dispatch(board_remove(row.brdnum));
          }}
        >
          X
        </button>
      </td> */}
      </tr>
    </thead>
  );
}

export default connect()(BoardItem);
