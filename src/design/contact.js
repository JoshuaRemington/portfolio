import './contact.css';

const Contact = () => {
    
    return (
        <>
            <div className='container contact-page'>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li>
                                <input type='text' name='name' placeholder='Name' required></input>
                            </li>
                            <li>
                                <input type='email' name='email' placeholder='Email' required></input>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required></input>
                            </li>
                            <li>
                                <textarea placeholder='Enter your message' name='Message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SUBMIT'></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact