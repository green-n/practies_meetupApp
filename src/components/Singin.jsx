import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'

const style = {
    wrapper: 'flex justify-center items-center'
}

const googleSingin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
}

const Singin = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSingin}/>
    </div>
  )
}

export default Singin