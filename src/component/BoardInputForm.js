import React, {useState} from "react";
import { board_save} from "./App_reducer";
import { connect } from "react-redux";

function BoardInputForm(props) {
    const [contents, setContents] = useState({
      title: "",
      writer: "",
    });

    const initialSelectedBoard = {
      brdnum: "",
      title: "",
      writer: "",
      date: ""
    }

    const handleChange = (e) => {
      setContents({
        ...contents,
        [e.target.name]: e.target.value,
      });
    }
  
    const handleSave = () => {
      props.dispatch(board_save(contents));
      setContents(this.initialSelectedBoard)
    }
  
    console.log(contents);
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
            id="writer"
            placeholder="writer"
            name="writer"
            autocomplete="off"
            onChange={handleChange}
          ></input>
          <input type="submit" value="ADD"></input>
        </form>
      </div>
    );
  }

  function mapReduxStateToReactProps(state) {
    return { selectedBoard: state.selectedBoard };
  }

  export default connect(mapReduxStateToReactProps)(BoardInputForm)