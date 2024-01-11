import React, { useEffect, useState } from 'react'
import { Products } from '../components/Products';
import { Spinner } from '../components/Spinner';

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([])

  async function fetchData() {
    setLoading(true);
    try{
      const response = await fetch(API_URL);
      const output = await response.json();
      setPosts(output);
      console.log(posts);

    }
    catch(error){
      console.log("Error in fetching api");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div >
      {
        loading ? (<div className="h-[100vh] flex flex-col justify-center items-center"><Spinner/></div>) : posts.length > 0 ? (
          <div className="grid grid-cols-4 max-w-6xl p-2 space-y-10 space-x-5 mx-auto min-h-[80vh]">
            {
              posts.map((post) => {
                return <Products key={post.id} post={post}/>
              })
            }
          </div>
        ) : (<p>No posts found</p>)
      }
    </div>
  )
}
