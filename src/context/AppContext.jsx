import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
import { useNavigate } from "react-router-dom";


export const AppContext=createContext();


export function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [post,setPosts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);
    const navigate=useNavigate()

    async function blogPosts(page=1,tag=null,category) {
        setLoading(true);



        let url=`${baseUrl}?page=${page}`
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`
        }
        
        try {
            const result=await fetch(url); 
            
            const data=await result.json();
            if (!data.posts || data.posts.length === 0)
                throw new Error("Something Went Wrong");
            console.log(data)
            setPosts(data.posts)
            setpage(data.page);
            setTotalPages(data.totalPages)
            
        } catch (error) {
            console.log({message:"Error in fetching data"})
            setpage(1);
            setPosts([])
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePage(page){
        navigate({search:`?page=${page}`})
        setpage(page)
        blogPosts(page)
    }
    const value={
        loading,
        setLoading,
        post,setPosts,
        page,setpage,
        totalPages,
        setTotalPages,
        blogPosts,
        handlePage
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}