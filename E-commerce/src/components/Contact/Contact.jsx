import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-12 text-center py-4 my-4">
                    <h1>Have Some Questions?</h1>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 d-flex justify-content-center">
                    <img src="./images/contact.png" alt="Contact Us" height='300px' width='300px'/>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleForm" className='form-label'>Full Name</label>
                            <input type="text" className='form-control' placeholder='John Smith'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleForm" className="form-label">Email Address</label>
                            <input type="email" className='form-control' placeholder='John@example.com'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleForm" className="form-label">Message</label>
                            <textarea className='form-control' rows="5"></textarea>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact