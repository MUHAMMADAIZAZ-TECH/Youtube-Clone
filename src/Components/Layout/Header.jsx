import React from 'react';
import {youtubeicon} from '../../Images/Index';
import { Navlist } from '../MockupData'
import { Link } from "react-router-dom";
import { MdMenu,MdOutlineMic,MdOutlineVideoCall,MdDoorbell,MdPersonPin,MdSearch } from 'react-icons/md';
export default function Header({
  Toggle,
  state,
  HandleSearchList,
  HandleSearchInput
}){
  return (
         <header>
            <div className="header-menu">
             <i><MdMenu/></i> 
                <img className='youtubeicon' src={youtubeicon} alt="youtube icon" />
                <div className="search-box">
                    <input type="text" placeholder="Search" name="title" id="text"onChange={HandleSearchInput}/>
                    <button onClick={HandleSearchList} className="search-button"> <Link to={`/searchedlist/${state.title}`}>
                      <MdSearch style={{fontSize:19}}/></Link> 
                      </button>
                   <button className="mic-icon"> <i className="gg-mic"> <MdOutlineMic/></i></button>
                </div>
                <div className="profile">
                    <i><MdOutlineVideoCall/></i>
                    <i><MdDoorbell/></i>
                    <i><MdPersonPin/></i>
                </div>
            </div>
            {Toggle?"": <div className="tag">
            <ul id="navlist">{Navlist.map((title,index)=><li key={index}>{title}</li>)}</ul>
           </div>}
          
        </header>
  )
}
