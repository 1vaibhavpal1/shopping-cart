import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
export const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className="bg-slate-900">
      <div className="max-w-6xl flex flex-row justify-between items-center mx-auto py-3">
      <NavLink to="/">
      <img src="../logo.png" className="h-14"/>
      </NavLink>

      <div className="flex flex-row gap-4 relative">
        <NavLink to="/">
          <p className="text-white text-lg">Home</p>
        </NavLink>

        {
        cart.length===0 ? (<div></div>) : (<div className="flex justify-center items-center bg-green-500 rounded-full h-5 w-5 absolute top-0 right-0 animate-bounce hover:cursor-pointer"><p className="text-white text-sm">{cart.length}</p>
          </div>)
        }

        <NavLink to="/cart">
        <TiShoppingCart className="text-white text-3xl hover:cursor-pointer" />
        </NavLink>
      </div>
    

    </div>
    </div>
  )
}
