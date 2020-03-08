import React, { useState } from 'react';
import './App.css';

function Contents(props){
  const [contents,setContents] = useState({
    title: '',
    desc: ''
  });

  function handleChange(e){
    setContents({
      ...contents,
      [e.target.name]:e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    props.onSave(contents);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="title" name="title" onChange={handleChange}></input>
        <input placeholder="desc" name="desc" onChange={handleChange}></input>
        <input type="submit" value="ADD"></input>
      </form>
    </div>
  );
}

function Template(){
  var [userData,setData] = useState({});

  function onSaveContents(data){
    console.log(data);
    setData(data);
  }

  return(
    <body>
      <section>
        <header>User status</header>
        <nav>menu</nav>
        <article>
        </article>
        <Contents onSave={onSaveContents}></Contents>
      </section>
    </body>
  );
}

function App() {
  var [userData,setData] = useState({
    boards:
    [
      {
        title:'Hello',
        desc:'HI',
        writer:'Jin'
      },
      {
        title:'Good bye',
        desc:'GG',
        writer:'Roh'
      }
    ]
  });

  return (
    <div>
      <Template></Template>
    </div>
  );
}

export default App;