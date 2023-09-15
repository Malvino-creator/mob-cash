import React from 'react'
import bgimg from "./assets/img1";

function Form() {
  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>


                <form id='form' className='flex flex-col'>
                    <input type='text' placeholder='Recipient Name'/>
                    <input type='text' placeholder='Your Name'/>
                    <input type='text' placeholder='$'/>
                    <input type='text' placeholder='Your message'/>

                    <button className='btn'>Sign In</button>
                </form>
            </div>

            <div className='col-2'>
                <img src={bgimg}alt=''></img>
            </div>
        </div>
    </section>
  )
}

export default Form