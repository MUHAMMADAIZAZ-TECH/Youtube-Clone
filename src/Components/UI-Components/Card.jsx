import React from 'react'
import {Thumbnail} from '../../Images/Index';

export default function Card({video,SearchedList,VideoScreen,remaininglist}) {
  return (
    <div className={SearchedList || remaininglist?"after-search-cards":"card"}>
      <img className={VideoScreen?"VideoScreen":"thumbnail"} src={video?Thumbnail:''} alt="Invalid Url"/>
       <div className="cardtext">
        <h4>{video?.videotitle} </h4>
         <p><br/>{video?.videodescription}
           <br/>{video?.videoPosttime} 
            <br/>{video?.videoviews}</p>
            </div>
        </div>
  )
}
