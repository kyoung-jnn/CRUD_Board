import React, { useState } from 'react';
import './App.css';

function AddContents(props){
  const [contents,setContents] = useState({
    num: '',
    title: '',
    desc: '',
    writer:'Jin'
  });

  function handleChange(e){
    setContents({
      ...contents,
      [e.target.name]:e.target.value,
      date:new Date()
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.saveContents(contents); //props로 전달된 함수 실행
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input id="title" placeholder="title" name="title" autocomplete="off" onChange={handleChange}></input>
        <input id="desc" placeholder="desc" name="desc" autocomplete="off" onChange={handleChange}></input>
        <input type="submit" value="ADD"></input>
      </form>
    </div>
  );
}

function ShowContents(props){
  function handleDelete(){
    console.log('delete contents num is:' + props.row.num);
    props.handleDelete(props.row.num);
  }

  return(
    <tbody>
      <tr>
        <td>{props.row.num}</td>
        <td>{props.row.title}</td>
        <td>{props.row.writer}</td>
        <td>{props.row.date.toLocaleDateString('kr-KR')}</td>
        <td><button className='delBtn' onClick={handleDelete}>X</button></td>
      </tr>
    </tbody>
  )
}


function Template(){
  var [Data,setData] = useState({
    total:2, 
    boards:
    [
      {
        num:1,
        title:'Hello',
        desc:'HI',
        writer:'Kyo',
        date:new Date()
      },
      {
        num:2,
        title:'Good bye',
        desc:'GG',
        writer:'Roh',
        date:new Date()
      }
    ]
  });

  function saveContents(data){
    setData({total:++Data.total,
             boards:Data.boards.concat({...data, num:Data.total})
            });
  }

  function delContents(delNum){
    setData({
      total:--Data.total,
      boards: Data.boards
      .filter(function(row){
        return row.num !== delNum // 화살표 함수 사용안함 중괄호 안에서는 return 해야함
      })
      .map(row => { // 번호 정리하기
        if(row.num < delNum)
          return row;
        else{
          --row.num;
          return row;
        }
      })
    })

  }

  console.log('new data: ' + JSON.stringify(Data));

  return(
    <body>
      <section>
        <header>React Board</header>
        <nav>
          <ul>
            <li><a class='active' href='Home'>Home</a></li>
            <li><a href='Profile'>Profile</a></li>
            <li><a>Contents</a></li>
            <li><a>About</a></li>
          </ul>
        </nav>
        <article>
          <table className='table'>
            <thead>
              <tr>
                <th className='Num'>번호</th>
                <th className='Title'>제목</th>
                <th className='Writer'>작성자</th>
                <th className='Date'>날짜</th>
                <th className='Del'>삭제</th>
              </tr>
            </thead>
            {
              Data.boards.map( row =>
               <ShowContents row = {row} handleDelete={delContents}></ShowContents> 
              )       
            }   
            
          </table>
        </article>
        <footer>
          <AddContents saveContents={saveContents}></AddContents>
        </footer>
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