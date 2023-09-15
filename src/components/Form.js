import React from 'react'
import bgimg from "../assets/bgimg.png";

function Form() {
    return (
        <section>
            <div className='register'>
                <div className='col-1'>

                    <span>Create a Custom Gift Card</span>


                    <form id='form' className='flex flex-col'>
                        <input type='text' placeholder='Recipient Name' />
                        <input type='text' placeholder='Your Name' />
                        <input type='text' placeholder='$' />
                        < input type='text' placeholder='Your message' id='message'/>

                    </form>
                    <span>
                        <button id="btn">Generate</button></span>
                </div>

                <div className='col-2'>
                    <img src={bgimg} alt=''></img>
                </div>
            </div>
        </section> 
    )
}

export default Form