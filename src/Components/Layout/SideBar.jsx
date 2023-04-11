import React from 'react'
import { SidebarContent } from '../MockupData'

export default function SideBar({
  Toggle
}) {

  return (
    <div className={Toggle?"sidebar-toggle":"left-menu"} >
      {SidebarContent.map((section,sectionindex)=><section className='section-divider' key={sectionindex}>
      {section.map((item,index)=>{
        return (
          <div key={index}>
           {item.extra?<p key={index}>{item.extra}</p>:null}
           {item.text? <a href="#" className={sectionindex===2 && index===1 ?"signin":""} key={index}>
            <i>{item.icon}</i><span>{item.text}</span></a>:""}
          </div>)})}
      </section>)}
    </div>
  )}
