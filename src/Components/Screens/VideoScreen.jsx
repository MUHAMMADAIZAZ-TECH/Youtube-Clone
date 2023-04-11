import React, { useEffect } from 'react'
import {Card} from '../UI-Components/index';
import { useLocation,useSearchParams,useParams ,createSearchParams,} from "react-router-dom";
export default function VideoScreen({
  Videos,
  HandleSearchList
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const routeParams = useParams();
  const Index = parseInt(searchParams.get('Index'))
  const watch = (searchParams.get('watch'))
  const array = [...Videos].filter((item)=>item.videourl!==watch)
  
  useEffect(()=>{
    HandleSearchList(location.pathname.split("/")[2])
    // console.log(array.splice(Index,1))
  },[Index,watch])
  return (
    <div className='videoscreen'>
    <section >
    <Card video={Videos[Index]} VideoScreen/>
    </section>
      <section className='remaining-list'>
    {array?.length>0 && Videos[Index]?array?.map((video,Index)=><div key={Index}>
      <Card video={video} remaininglist/></div>):""}
    </section>
    </div>
  )
}
