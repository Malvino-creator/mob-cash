import React from 'react'
import bgimg from "../assets/bgimg.png";

function Form() {
    return (
        <section>
            <div className='register'>
                <div className='col-1'>

                    <form id='form' className='flex flex-col'>
                        <span><h1 className='custom'>Create a Custom Gift Card</h1></span>

                        <span>
                            <h2>To</h2>
                        </span>
                        <input type='text' placeholder='Recipient Name' />
                        <span>
                            <h2>From</h2>
                        </span>
                        <input type='text' placeholder='Your Name' />
                        <span>
                            <h2>Amount(USD)</h2>
                        </span>
                        <input type='text' placeholder='$' />
                        <span>
                            <h2>Your message</h2>
                        </span>
                        < input type='text' placeholder='' id='message' />

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