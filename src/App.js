import React, { useState } from 'react';
import './App.css';

function AddContents(props){
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
    props.saveContents(contents); //props로 전달된 함수 실행
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

function ShowContents(props){
  console.log(props);
  return(
    <tbody>
      <tr>
        <td>{props.row.no}</td>
        <td>{props.row.title}</td>
        <td>{props.row.writer}</td>
        <td>0</td>
      </tr>
    </tbody>
  )
}

function Template(){
  var [Data,setData] = useState({
    max:2, //여기 수정해야함
    boards:
    [
      {
        no:'1',
        title:'Hello',
        desc:'HI',
        writer:'Jin'
      },
      {
        no:'2',
        title:'Good bye',
        desc:'GG',
        writer:'Roh'
      }
    ]
  });

  function saveContents(data){
    console.log('Save data: ' + data);
    var boards = Data.boards.concat(data);
    setData({boards});
  }

  return(
    <body>
      <section>
        <header>React Board</header>
        <nav>menu</nav>
        <article>
          <table className='table'>
            <thead>
              <tr>
                <th className='No'>번호</th>
                <th className='Title'>제목</th>
                <th className='Writer'>작성자</th>
                <th className='View'>조회수</th>
              </tr>
            </thead>
            {
              Data.boards.map( row =>
              (
                <ShowContents row = {row}></ShowContents>)
              )       
            }   
          </table>
        </article>
        <AddContents saveContents={saveContents}></AddContents>
      </section>
    </body>
  );
}

function App() {
  return (
    <div>
      <Template></Template>
    </div>
  );
}

export default App;