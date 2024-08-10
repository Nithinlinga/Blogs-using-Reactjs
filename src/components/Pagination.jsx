import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page,handlePage,totalPages}=useContext(AppContext)
  return (
    <div className='w-4/12 flex '>
      <div className='w-full flex justify-start gap-x-3'>
        {
          page>1 && (
          <button
          onClick={()=>{
            handlePage(page-1)
          }}
          type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
          focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
           dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Previous</button>
        )}
        {
        page<totalPages && ( <button
        onClick={
          ()=>{
            handlePage(page+1)
          }
        }
        type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
        focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
         dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Next</button>
      )}
      </div>
      <div className='w-full flex justify-end'><p>
          Page {page} of {totalPages}
        </p></div>
    </div>
  )
}

export default Pagination