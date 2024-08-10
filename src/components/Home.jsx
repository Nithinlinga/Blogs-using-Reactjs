import React from 'react'
import Blogs from './Blogs'
import Header from './Header'
import Pagination from './Pagination'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-start items-center'>
        <Header/>
        <Blogs/>
        <Pagination/>
        

    </div>
  )
}

export default Home