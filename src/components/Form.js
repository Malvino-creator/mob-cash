import React from 'react'

function Form() {
  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col'>
                    <input type='text' placeholder='username'/>
                    <input type='text' placeholder='password'/>
                    <input type='text' placeholder='confrim password'/>
                    <input type='text' placeholder='mobile number'/>
                </form>
            </div>
            <div className='col-2'></div>
        </div>
    </section>
  )
}

export default Form