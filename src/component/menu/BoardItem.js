import React from "react";
import { board_read, board_remove } from "../../redux/action";
import { connect } from "react-redux";

import styled from "styled-components";


function BoardItem(props) {
  const handleUpdateForm = (brdnum) => {
    props.dispatch(board_read(brdnum));
  };

  const row = props.row;
  
  return (
    <tr> 
      <td style={{border:0}}>{row.brdnum}</td>
      <td style={{border:0}}>
        <a onClick={() => handleUpdateForm(row.brdnum)}>{row.title}</a>
      </td>
      <td style={{border:0}}>{row.writer}</td>
      <td style={{border:0}}>{row.date.toLocaleDateString("kr-KR")}</td>
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
  );
}


export default connect()(BoardItem);
