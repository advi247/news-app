import React from 'react'
import {signInWithPopup} from "firebase/auth"
import {auth, googleProvider} from '../firebase/setup.js'

const AbtPg = () => {

    const googleSignin = async() => {
        try{
            await signInWithPopup(auth, googleProvider)
            alert("You've successfully signed in!")
        }
        catch(err){
            console.error(err)
        }
        
    }

  return (
    <div>
<div className="px-4 py-5 my-5 text-center">
    <span className="badge logo">FYI</span>
    <h1 className="display-5 mt-3 mb-4 heading-design">Cure your FOMO</h1>
    <div className="col-lg-6 mx-auto">
      <p className="para-design mb-5">Find out all about what the nation wants, needs and has right here. 
        We've curated the latest updates from different news channels and sorted them based on categories, 
        so you never have to jump sites for your daily dose of current affairs again. Share your thoughts with other like-minded users 
        through our blog and sign up for exciting updates!</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-lg px-4 gap-3 button-one" onClick={googleSignin}>Sign Up!</button>
      </div>
    </div>
</div>
    </div>
  )
}

export default AbtPg
