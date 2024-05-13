import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../redux/Userslice'

const Logout = () => {
  const data= useSelector(selectUser)

  const dispatch = useDispatch()
  const Handlelogout=(e)=>{
    e.preventDefault()
    dispatch(logout())
  }
  return (
    <div>
        welcome <span>{data.name} </span><br /><br />
        <button onClick={(e)=>Handlelogout(e)}>Logout</button>
    </div>
  )
}

export default Logout