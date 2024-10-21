import './Menu_bar.css'
import { useState } from 'react'

function Menu_bar() {
    let [colour, setColour] = useState(true)
    function changeColour() {
        setColour((colour) => {
            return !colour})
    }

    if(!colour){
        document.body.style.backgroundColor = "black"
    } else {
        document.body.style.backgroundColor = "white"
    }

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const [info, setInfo] = useState(false);

    const toggleInfo = () => {
        setInfo(!info);
    };

    if(info) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return(
        <div className='nav_bar'>
            <div className='logo'></div>
            <div className='title_area'>
                <div className='title'>
                    <div className='title1'>
                        <h1 className='title1_text'>VFSTR ChatBot</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='title1_icon'>
                            <path fill="#ff8c00" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                        </svg>
                    </div>
                    <p className='title2'>Get instant answers to any questions about the University.</p>
                </div>
            </div>
            <div className='left_part'>
                <div className='Comp1'>
                    <div className='logo1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='left_logo1' onClick={changeColour}>
                            <path d="M162.4 6c-1.5-3.6-5-6-8.9-6l-19 0c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6L48 0C21.5 0 0 21.5 0 48L0 224l0 22.4L0 256l9.6 0 364.8 0 9.6 0 0-9.6 0-22.4 0-176c0-26.5-21.5-48-48-48L230.5 0c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288l0 32c0 35.3 28.7 64 64 64l64 0 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64l0-64 64 0c35.3 0 64-28.7 64-64l0-32L0 288zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"/>
                        </svg>
                    </div>
                    <div className='text1'>
                        <p>Theme</p>
                    </div>
                </div>
                <div className='Comp2'>
                    <div className='logo2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className='left_logo2' onClick={toggleModal}>
                            <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"/>
                        </svg>
                    </div>
                    <div className='text2'>
                        <p>About</p>
                    </div>
                </div>
                <div className='Comp3'>
                    <div className='logo3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='left_logo3'>
                            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </div>
                    <div className='text3'>
                        <p>Menu</p>
                    </div>
                </div>
                <div className='Comp4'>
                    <div className='logo4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='left_logo4' onClick={toggleInfo}>
                            <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/>
                        </svg>
                    </div>
                    <div className='text4'>
                        <p>Creaters</p>
                    </div>
                </div>
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>About The ChatBot</h2>
                            <p>
                            Introducing the <b>VFSTR ChatBot</b>, a newly developed virtual assistant fine-tuned on university-specific documents 
                            to help you navigate campus life effortlessly. Whether you need information on admissions, academic programs, 
                            or upcoming events, the chatbot provides accurate, instant answers. Available 24/7, it offers round-the-clock 
                            support for students, staff, and faculty. The chatbot's vast knowledge base ensures reliable information about 
                            courses, facilities, and services, making it a go-to resource for any query. With continuous learning, it 
                            evolves to meet your needs better each day.
                            </p>
                            <button className="close-modal" onClick={toggleModal}>CLOSE</button>
                        </div>
                    </div>
                )}

                {info && (
                    <div className="modal">
                        <div onClick={toggleInfo} className="overlay"></div>
                        <div className="modal-content">
                            <h2>ChatBot Creaters</h2>
                            <div className='peoples'>
                                <div className='person'>
                                    <h4>P. Vijaya Raghava</h4>
                                    <p>221FA18025</p>
                                </div>
                                <div className='person'>
                                    <h4>K. V. B. Aditya</h4>
                                    <p>221FA18044</p>
                                </div>
                                <div className='person'>
                                    <h4>Paruchuru Tarun</h4>
                                    <p>221FA18048</p>
                                </div>
                                <div className='person'>
                                    <h4>K. Venu Varthan</h4>
                                    <p>221FA18117</p>
                                </div>
                                <div className='person'>
                                    <h4>M. Hari Shiva Sai</h4>
                                    <p>221FA18165</p>
                                </div>
                            </div>
                            <button className="close-modal" onClick={toggleInfo}>CLOSE</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menu_bar
