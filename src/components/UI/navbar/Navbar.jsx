import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'
import Button from '../button/Button';
import { AuthContext } from '../../../context/index';

export default function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={classes.navbar}>
        <Button onClick={logout}>Выйти</Button>
        <div className={classes.navbar__links}>
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Список постов</Link>
        </div>
      </div>
  )
}
