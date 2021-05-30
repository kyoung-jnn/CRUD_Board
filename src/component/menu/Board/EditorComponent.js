import React, { Component } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";

import "react-quill/dist/quill.snow.css";

class EditorComponent extends Component {
  modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  render() {
    const { value, onChange } = this.props;
    return (
      <StyledReactQuill
        theme="snow"
        modules={this.modules}
        formats={this.formats}
        value={value || ""}
        onChange={(content, delta, source, editor) =>
          onChange(editor.getHTML())
        }
      />
    );
  }
}

const StyledReactQuill = styled(ReactQuill)`
  width: 100%;
  height: 75%;
  color: ${(props) => props.theme.defaultText};
`;
export default EditorComponent;
