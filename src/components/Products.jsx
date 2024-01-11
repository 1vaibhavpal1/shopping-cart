import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';

export const Products = ({post}) => {
    const {cart} =  useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item Added");
    }
    const removeCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed");
    }
    
  return (
    <div className="p-4 mt-10 ml-5 rounded-lg flex flex-col gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center justify-center hover:scale-110 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-300 ease-in">
        {
            post.title.length > 18 ? (<h2 className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">{post.title.substring(0,18)}...</h2>) :(<p className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">{post.title}</p>)
        }
        
        {
            post.description.length > 60 ? (<p className=" w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.substring(0,60)}...</p>) : (<p className=" w-40 text-gray-400 font-normal text-[10px] text-left">{post.description}</p>)
        }

        <div className="h-[180px]">
            <img src={post.image} className="h-full w-full object-contain" />
        </div>
        
        <div className="flex flex-row w-full justify-between">
        <span className="text-green-600 font-bold">${post.price}</span>
            {
                cart.some((p) => p.id === post.id) ?
                (<button className="uppercase text-xs text-gray-700 font-semibold border-gray-700
                border-2 rounded-full py-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300"  onClick={removeCart}>Remove Item</button>) : (<button className="uppercase text-xs font-semibold border-gray-700 text-gray-700 
                border-2 rounded-full py-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300" onClick={addToCart}>Add to Cart</button>)
            }
        </div>
    </div>
  )
}
