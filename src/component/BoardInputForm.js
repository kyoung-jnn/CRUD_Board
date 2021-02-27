import React, { useEffect, useState } from "react";
import { board_save } from "../redux/action";
import { connect } from "react-redux";

function BoardInputForm(props) {
  const [inputState, setInputState] = useState({
    title: "",
    writer: "",
  });


  const initialSelectedBoard = {
    brdnum: "",
    title: "",
    writer: "",
    date: "",
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  // ComponentWillReceiveProps 역할
  // props 값의 변화가 생기면 useEffect 실행
  // 즉 selectedBoard의 변화가 생기면 실행
  useEffect(() => {
    setInputState(props.selectedBoard);
  }, [props]);

  const handleSave = (e) => {
    e.preventDefault();
    props.dispatch(board_save(inputState));
    setInputState(initialSelectedBoard);
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <input
          id="title"
          placeholder="title"
          name="title"
          value={inputState.title}
          autocomplete="off"
          onChange={handleChange}
        ></input>
        <input
          id="writer"
          placeholder="writer"
          name="writer"
          value={inputState.writer}
          autocomplete="off"
          onChange={handleChange}
        ></input>
        <input type="submit" value="ADD"></input>
      </form>
    </div>
  );
}

function mapReduxStateToReactProps(state) {
  console.log('BoardInputForm mapReduxStateToReactProps\n',state);

  return { selectedBoard: state.selectedBoard };
}

export default connect(mapReduxStateToReactProps)(BoardInputForm);
