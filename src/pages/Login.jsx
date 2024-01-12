import React, { useContext } from 'react'
import Input from '../components/UI/input/Input'
import Button from '../components/UI/button/Button'
import { AuthContext } from '../context';

export default function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.getItem('auth', 'true')
  }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <Input type='text' placeholder="Введите логин"></Input>
        <Input type='password' placeholder="Введите пароль"></Input>
        <Button >Войти</Button>
      </form>
    </div>
  )
}
