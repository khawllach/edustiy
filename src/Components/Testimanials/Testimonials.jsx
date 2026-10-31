import React, { useRef } from 'react'
import './Testimonials.css'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    const slideforward = () => { 
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slidebackward = () => {
         if(tx < 0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
     }
    return (
        <div className='test'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideforward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slidebackward} />
            <div className='sliders'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson 1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue a degree in Edusity has been one of the best decisions i have ever made.
                                 The supportive community,state-of-the-art facilities, and commitment to academic excellence have 
                                 truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson 2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue a degree in Edusity has been one of the best decisions i have ever made.
                                 The supportive community,state-of-the-art facilities, and commitment to academic excellence have 
                                 truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson 3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue a degree in Edusity has been one of the best decisions i have ever made.
                                 The supportive community,state-of-the-art facilities, and commitment to academic excellence have 
                                 truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson 4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue a degree in Edusity has been one of the best decisions i have ever made.
                                 The supportive community,state-of-the-art facilities, and commitment to academic excellence have 
                                 truly exceeded my expectations.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Testimonials
