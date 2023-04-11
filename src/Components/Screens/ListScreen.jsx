import React, { useEffect } from 'react';
import {Card} from '../UI-Components/index';
import { useParams ,createSearchParams, useSearchParams} from "react-router-dom";
export default function ListScreen({Videos,HandleSearchList}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const routeParams = useParams();
  
  useEffect(()=>{
    HandleSearchList(routeParams.results)
    document.getElementById("text").value = routeParams.results;
  },[routeParams.results])
  return (
    <section>
      {Videos.length>0?Videos.map((video,Index)=><div key={Index} onClick={() => {
                setSearchParams(
                  createSearchParams({q:routeParams.results,watch:video.videourl,Index:Index,Toggle:true})
                );
              }}>
        <Card video={video}  SearchedList /></div>):<h1>Result Not Found</h1>}
      </section>
  )
}
