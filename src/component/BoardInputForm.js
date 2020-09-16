import React, {useState} from "react";
import { board_save} from "./App_reducer";
import { connect } from "react-redux";

function BoardInputForm(props) {
    const [contents, setContents] = useState({
      brdnum: "",
      title: "",
      writer: "Jin",
      desc: "",
      date: ""
    });
  
    const handleChange = (e) => {
      setContents({
        ...contents,
        [e.target.name]: e.target.value,
        date: new Date(),
      });
    }
  
    const handleSave = (props) => {
      props.dispatch(board_save(this.state));
      props.saveContents(contents); //props로 전달된 함수 실행
    }
  
    return (
      <div>
        <form onSubmit={handleSave}>
          <input
            id="title"
            placeholder="title"
            name="title"
            autocomplete="off"
            onChange={handleChange}
          ></input>
          <input
            id="desc"
            placeholder="desc"
            name="desc"
            autocomplete="off"
            onChange={handleChange}
          ></input>
          <input type="submit" value="ADD"></input>
        </form>
      </div>
    );
  }

  export default connect()(BoardInputForm)