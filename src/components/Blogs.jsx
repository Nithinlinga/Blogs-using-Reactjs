import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';
// import Card from './Card';

const Blogs = () => {
    const {post,loading}=useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[500px]  py-3 flex flex-col gap-y-7 '>
        {loading ?(<Spinner/>):(
            post.length===0?(
                <div>No Post available at the moment</div>
            ):(
                post.map((post)=>(
                    <BlogDetails key={post.id} post={post}/>
                ))
            )
        )
            
        }
    </div>
  )
}

export default Blogs