import React from "react";
import { board_read } from "../../../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function BoardItem({ row, dispatch }) {
  const handleDetail = (brdnum) => {
    dispatch(board_read(brdnum));
  };

  return (
    <thead>
      <tr style={{ height: 40, cursor: "pointer" }}>
        <td style={{ fontFamily: "NanumBarunGothic" }}>{row.brdnum}</td>
        <td style={{ fontFamily: "NanumBarunGothic", fontWeight: "bold" }}>
          <Link
            to={`/Board/${row.brdnum}`}
            style={{ color: "#111", textDecoration: "none" }}
            onClick={() => handleDetail(row.brdnum)}
          >
            {row.title}
          </Link>
        </td>
        <td style={{ fontFamily: "NanumBarunGothic" }}>{row.writer}</td>
        <td style={{ fontFamily: "NanumBarunGothic" }}>
          {row.date.toLocaleDateString("kr-KR")}
        </td>
      </tr>
    </thead>
  );
}

export default connect()(BoardItem);
