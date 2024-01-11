import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add, remove } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';
export const CartItems = ({item, itemIndex}) => {
    const dispatch = useDispatch()
    function removeCart(){
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }
  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 ">
        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-4/12">
            <img src={item.image} className="object-cover" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
            <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
            {/* <p className="text-base text-slate-700 font-medium">{item.description}</p> */}
            {
            item.description.length > 60 ? (<p className="text-base text-slate-700 font-medium">{item.description.substring(0,60)}...</p>) : (<p className="text-base text-slate-700 font-medium">{item.description}</p>)
        }
            <div className="flex items-center justify-between">
                <p className="font-bold text-lg text-green-600">${item.price}</p>
                <div className=" bg-red-200 group hover:bg-red-400 hover:cursor-pointer transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3 w-[2em] h-[2em] flex justify-center items-center">
                    <button onClick={removeCart} className="hover:cursor-pointer"><MdDelete className="h-[1em] w-[1em] text-red-600 group-hover:text-white"/></button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
