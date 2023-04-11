import React from 'react'
import {Card} from '../UI-Components/index';
export default function Home({Videos}) {
  return (
    <section>
      {Videos.length>0?Videos.map((video,Index)=><Card video={video} key={Index}/>):<h1>Result Not Found</h1>}
      </section>
  )
}
