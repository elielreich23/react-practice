import React from 'react'
import './style.scss'

function index() {
  return (
    <>
     <form method="post" action="/dashboard" >
          <span>Login</span>
          <input className={styles.text} name="username" type="text" />

          <span>Senha</span>
          <input type="password" className={styles.text} name="password" />

          <Link href="/email">
            <label htmlFor="checkbox-1-1">Esqueci a senha</label>
          </Link>

          <br />
          <button className={styles.signin}>
            Entrar
          </button>
          <hr />
        </form>
    </>
  )
}

export default index