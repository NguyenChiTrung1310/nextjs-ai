'use client'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import React from 'react'

import {auth} from '@/configs/firebaseConfig'

function Authentication({children}: any) {
  const provider = new GoogleAuthProvider()

  const onButtonPress = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result)
      })
      .catch((error) => {
        console.log('Sign in with google ~ error: ', error)
      })
  }
  return (
    <div>
      <div onClick={onButtonPress}>{children}</div>
    </div>
  )
}

export default Authentication
