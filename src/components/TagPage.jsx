import React from 'react'
import { useLocation,  useNavigate} from 'react-router-dom'
import Header from './Header';
import Blogs from './Blogs';
import Pagination from './Pagination';

const TagPage = () => {
  const navigation=useNavigate();
  const location=useLocation();
  const tag=location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>{
          navigation(-1);
        }}>back</button>
        <h2>Tagged Blogs <span>#{tag}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>

    </div>
  )
}

export default TagPage