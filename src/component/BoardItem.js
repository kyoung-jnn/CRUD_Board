import React, { useEffect } from "react";
import { board_read, board_remove } from "./App_reducer";
import { connect } from "react-redux";

function BoardItem(props) {
  const handleUpdateForm = (props, brdnum) => {
    props.dispatch(board_read(brdnum));
  };

  const row = props.row;
  return (
    <tbody>
      <tr>
        <td>{row.brdnum}</td>
        <td>
          <a onClick={() => handleUpdateForm(props, row.brdnum)}>{row.title}</a>
        </td>
        <td>{row.writer}</td>
        <td>{row.date.toLocaleDateString("kr-KR")}</td>
        <td>
          <button
            className="delBtn"
            onClick={() => {
              props.dispatch(board_remove(row.brdnum));
            }}
          >
            X
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default connect()(BoardItem);
