import './App.css';
import React, { useState } from 'react';
import {Header,Container,SideBar} from './Components/Layout';
import { Videos } from './Components/MockupData';
import { useSearchParams} from "react-router-dom";
const App = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const Toggle = (searchParams.get('Toggle'))
  const [state,setstate] = useState({
    title:'',
    list:[],
    displaymessage:""
  })
  const HandleSearchInput = (e) => setstate({...state,[e.target.name]:e.target.value});
  
  const HandleSearchList = (routeParams,watch,Index) =>{
    if (state.title.length > 0) {
      let filterdList = Videos.filter((video) => video.videotitle.toLowerCase().match(state.title.toLowerCase()));
      setstate({...state,list:filterdList})
   }
   else if(routeParams.length>0){
    let filterdList = Videos.filter((video) => video.videotitle.toLowerCase().match(routeParams.toLowerCase()));
    setstate({...state,list:filterdList})
   }
   else{
    console.log("please Enter A value")
   }
  }
  return (
    <div>
     <Header state={state} setstate={setstate} HandleSearchInput={HandleSearchInput} HandleSearchList={HandleSearchList} Toggle={Toggle}/>
     <div className="main-container">
      <SideBar Toggle={Toggle}/>
      <div className={Toggle?"expand-container":"right-menu"}>
      <Container state={state} HandleSearchList={HandleSearchList}/>
      </div>
     </div>
    </div>
  );
}

export default App;
