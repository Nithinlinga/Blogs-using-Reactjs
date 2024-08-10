import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Blogs from './Blogs';
import BlogDetails from './BlogDetails';

const BlogPage = () => {
  const [blog,setBlog]=useState(null)
  const {setLoading,loading}=useContext(AppContext);
  const [relatedBlog,setRelatedBlog]=useState([]);
  const location=useLocation();
  const navigation=useNavigate();
  const blogId=location.pathname.split("/").at(-1);
  async function fetchRelatedBlogs(){
    setLoading(true);
    let url=`${baseUrl}?blogId=${blogId}`;

    try {
      const result=await fetch(url);
      const data=result.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs)
    } catch (error) {
      console.log({msg:"Error"})
      setBlog(null)
      setRelatedBlog([])
    }
    setLoading(false)
  }
  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>{
          navigation(-1);
        }}>back</button>

      </div>
      {
        loading ?<p> Loading</p> : blog ? (
          <div>
            <BlogDetails post={blog}/>
            <h1>Realted Blogs</h1>
            {
              relatedBlog.map((post)=>{
                <div key={post.id}>
                  <BlogDetails post={post}/>
                </div>
              })
            }
          </div>

        ): <p>No Blog found</p>
      }
    </div>
  )
}

export default BlogPage