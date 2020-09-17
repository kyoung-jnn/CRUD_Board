import React, {useState,useEffect} from "react";
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
      });
    }
  
    const handleSave = (props) => {
      props.dispatch(board_save(this.state));
      setContents(contents);
    }
  
    useEffect(()=> {
      
    },)

    return (
      <div>
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
          <button onClick={handleSave}>저장</button>
      </div>
    );
  }

  export default connect()(BoardInputForm)