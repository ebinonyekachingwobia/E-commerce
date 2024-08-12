import React from 'react'

const Signup = () => {
  return (
    <div>
        <button type='button' className='btn btn-outline-primary ms-auto' data-bs-toggle='modal' data-bs-target='#loginModal'>
            <span className='fa fa-sign-in me-1'>Register</span>
        </button>

        <div className='modal fade' id='loginModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <button className='btn btn-primary w-100 mb-4'>
                            <span className='fa fa-google me-2'></span> Sign in with Google
                        </button>
                        <button>
                            <span className='fa fa-facebook me-2'></span> Sign in with Facebook
                        </button>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Username</label>
                                <input type="text" className='form-control' id='exampleInput'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Email address</label>
                                <input type="email" className='form-control' id='exampleInputEmail' aria-describedby='emailHelp'/>
                                <div className='form-text' id='emailHelp'>We'll never share your email with anyone else</div>
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Password</label>
                                <input type="password" className='form-control' id='exampleInputPassword1'/>     
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className='form-control' id='exampleInputCheck' />
                                <label htmlFor="" className='form-label'>Check me out</label>
                            </div>
                            <button type='submit' className='btn btn-outline-primary w-100 mt-5'>Register</button>
                        </form>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup