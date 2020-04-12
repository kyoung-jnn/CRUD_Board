import React, { useState } from 'react';
import './App.css';

function AddContents(props){
  const [contents,setContents] = useState({
    num: '',
    title: '',
    desc: ''
  });

  function handleChange(e){
    console.log(e.target.value);
    setContents({
      ...contents,
      num: props.dataSize+1,
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
        <td>{props.row.num}</td>
        <td>{props.row.title}</td>
        <td>{props.row.writer}</td>
        <td>0</td>
      </tr>
    </tbody>
  )
}

function Template(){
  var [Data,setData] = useState({
    max:2, 
    boards:
    [
      {
        num:'1',
        title:'Hello',
        desc:'HI',
        writer:'Jin'
      },
      {
        num:'2',
        title:'Good bye',
        desc:'GG',
        writer:'Roh'
      }
    ]
  });
  var dataSize = Object.keys(Data.boards).length; // Data의 크기 번호 설정을 위해 사용
  
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
                <th className='Num'>번호</th>
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
        <AddContents saveContents={saveContents} dataSize={dataSize}></AddContents>
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