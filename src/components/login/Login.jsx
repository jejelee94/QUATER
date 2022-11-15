import React from 'react'
import style from './Login.module.css'

const Login = () => {
  return (
    <div className={style.outer}>
      <div className={style.container}>
        <div>쿼츠룸에 오신 걸 환영합니다!</div>
        <form>
          <div>
            <span>아이디 : </span>
            <input></input>
          </div>
          <div>
            <span>비밀번호 : </span>
            <input></input>
          </div>
          <div>
            <div>계정 생성</div>
            <div>입장</div>
          </div>
          <div>
            <button>구글</button>
            <button>카카오</button>
            <button>네이버</button>
            <button>게스트</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
