import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {

  let posts = ' 오늘은 뭐 좋은 일이 있을까?'
  let blogBody = '오오오우우우우 내용입니다빠디바디바디'

  let styleVar = {color: 'red', fontSize: '22px'}

  let [blogTitle, titleChange] = useState('블로그 어떤 제목임. 스테이트제목임');
  let [idolNames, titleChange2] = useState(['zGirl','yellowgirl','ciderella']);

  let [guys, changeGuys] = useState(['아이언맨','휴맨','강맨']);

  let [favCount, favCountChanged] = useState(100)
    
  function changeName() {
    var newName = [...idolNames]
    newName[0] = '별개의 남자'
    titleChange2(newName)
  }

  function sortGirls() {
    var copied = [...idolNames]
    copied.sort()
    titleChange2(copied)
  }
  return (
    <div className="App">
       
      <div className="black-nav">  여기다가 웹페이지를 그냥 만들면 됨fff  </div>

      <div> 개발 블로깅이요 </div>
        
      <button onClick={ changeName }>이름변경</button>  
      <button onClick={ sortGirls }>소팅하기</button>  
      <div className="myList"> 
        <h3> {blogBody}</h3>
        <p>slsls 에 발행함</p>
        <hr></hr>
      </div>
       
    
      <div className="myList"> 
        <h3> {idolNames[0]} <span onClick={ ()=>{ favCountChanged (favCount+1)  }}> 💖 </span> {favCount} </h3>
        <p>slsls 에 발행함</p>
        <hr></hr>
      </div>

      <div className="myList"> 
        <h3> {idolNames[1]}</h3>
        <p>slsls 에 발행함</p>
        <hr></hr>
      </div>
      <div className="myList"> 
        <h3> {idolNames[2]}</h3>
        <p>slsls 에 발행함</p>
        <hr></hr>
      </div>

       <Modal> </Modal>
     </div>
  );
}

function Modal() {
  return (

    <div className='modal'> hello 내맘대로지롱!
    
    </div>
  )
}

export default App;
