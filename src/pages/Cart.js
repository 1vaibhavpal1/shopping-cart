import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItems } from '../components/CartItems'
import { NavLink } from 'react-router-dom';


export const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect( () => {
    setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price,0))
  }, [cart])
  return (
    <div >
      {
        cart.length > 0 ? 
        (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">{
            cart.map((item,index) => {
              return <CartItems key={item.id} item={item} itemIndex={index}/>
            })
          }</div>
          <div className="flex flex-col p-5 gap-5 my-12 h-12/12 justify-between">
            <div>
              <p className="uppercase font-semibold text-xl text-green-800 ">Your Cart</p>
              <span className="uppercase font-semibold text-5xl text-green-700  -mt-5">Summary</span>
              <p className="text-xl"><span className="text-gray-700 font-semibold text-xl">Total Items: </span> {cart.length}</p>
              </div>
            <div>
              <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span>  ${totalAmount}</p>
               <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 py-3 px-12 text-xl">Checkout Now</button>
            </div>
          </div>
        </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[100vh]">
            <h2 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h2>
            <NavLink to="/"><button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button></NavLink>
          </div>
        )
      }
    </div>
  )
}
