import React from 'react'
import '../css/LogoutButton.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {auth} from "../utils/firebase";
import {logout} from "../slices/userSlice";

function LogoutButton() {
  const dispatch = useDispatch()
  const history = useNavigate()

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout())
        history('/')
      })
      .catch((error) => alert(error.message))
  }

  return (
    <button className='logoutButton' onClick={logoutOfApp}>
      Log Out
    </button>
  )
}

export default LogoutButton
