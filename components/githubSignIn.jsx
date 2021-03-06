import React, { useCallback } from "react"
import { useRouter } from "next/router"

import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase/clientApp"

const GithubSignIn = () => {
  const Router = useRouter()

  const loginHandler = useCallback(async () => {
    const provider = new GithubAuthProvider()
    // additional scopes can be added as per requirement

    try {
      await signInWithPopup(auth, provider)

      Router.push("/")
    } catch (error) {
      console.log("error")
      alert(error)
    }
  }, [Router])
  return (
    <button
      className="p-3 shadow-lg rounded-lg border-2 flex cursor-pointer bg-black text-white hover:bg-gray-600 hover:shadow-2xl transition-all duration-500"
      onClick={loginHandler}
    >
      <div className="flex items-center">
       
        <h3 className="ml-4 text-lg font-semibold  my-auto ">
          Continue with GitHub
        </h3>
      </div>
    </button>
  )
}

export default GithubSignIn
