import React from 'react';
import Posts from "../../components/posts/Posts"
 import Sidebar from '../../components/sidebar/SideBar';
import "./home.css"
import Header from '../../components/header/Header'
 
export default function Home() {
 return(
   <>
  <Header />
   <div className='home'> 
   <Posts /> 
   <Sidebar />
   </div>
   </>
 )
}
