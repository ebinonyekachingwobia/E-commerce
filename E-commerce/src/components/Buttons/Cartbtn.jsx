import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cartbtn = () => {
    const state = useSelector((state) => state.addItems)
  return (
    <div>
        <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'>Cart ({state.length})</span>
        </NavLink>
    </div>
  )
}

export default Cartbtn