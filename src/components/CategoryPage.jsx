import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from './Header';
import Blogs from './Blogs';
import Pagination from './Pagination';

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => {
          navigation(-1)
        }}>back</button>
        <h1>
          Blogs on <span>{category}</span>
        </h1>
      </div>
      <Blogs />
      <Pagination />

    </div>
  )
}

export default CategoryPage