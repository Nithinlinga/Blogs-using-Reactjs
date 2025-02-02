import React, { useContext, useEffect } from 'react'
import './App.css'
import { AppContext } from './context/AppContext'
import Home from './components/Home'
import BlogPage from './components/BlogPage'
import TagPage from './components/TagPage'
import CategoryPage from './components/CategoryPage'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

const App = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const {blogPosts}=useContext(AppContext)
  const location=useLocation();

  useEffect(()=>{
    const page=searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      blogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      blogPosts(Number(page),null,category)
    }
    else{
      blogPosts(Number(page));
    }

  },[location.pathname,location.search])
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes> 
    </>
    )
}

export default App