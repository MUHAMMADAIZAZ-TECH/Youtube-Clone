import React from 'react';
import { Videos } from '../MockupData';
import {ListScreen,Home,VideoScreen} from '../Screens/index';
import { Outlet,Routes, Route ,useSearchParams} from "react-router-dom";
import SideBar from './SideBar';
export default function Container({
  state,
  HandleSearchList
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const SelectedVideo = searchParams.get("q")?.replaceAll(/[0-9]/g, '');
  return (
    <Routes>
    <Route path='/' element={<Home Videos={Videos} />}/>
    <Route path='/searchedlist/:results' element={<ListScreen Videos={state.list} HandleSearchList={HandleSearchList}/>}/>
    <Route path={`/searchedlist/${(SelectedVideo)}`} element={<VideoScreen Videos={state.list} HandleSearchList={HandleSearchList}/>}/>
  </Routes>
  )
}
