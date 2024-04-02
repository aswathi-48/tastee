import React from 'react'
import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
    <div className="modal-box">
      <div className="modal-action mt-0">
      <form className="card-body" method='dialog'>
        <h3 className='font-bold text-lg'>Please Login</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label mt-1">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value="Login" className="btn bg-green text-white"/>
        </div>
      <p text-center my-2>  Donot have an account?<Link to="/signup">Signup Now</Link></p>
      </form>
      </div>
    </div>
  </dialog>
  )
}

export default Modal