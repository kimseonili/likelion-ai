import React from 'react';
import './Main.css';
import main_visual_1 from './img/main_visual_1.jpg'
import logo from './img/logo_1.png'
import main_1 from './img/main_1.jpg'
import iu from './img/iu.mp4'

const Main = () => {
    

    return (
        <div className='Main'>
            <header>
                <div className='banner'>
                    <a href="#"><img src={logo} /></a>
                    <a href="/more">PHOTO</a>
                    <a href="/more">WORKS</a>
                </div>
            </header>
            <div className='main_contain'>
                <div className='main_1'>
                    <p className='main_img'>
                        <span className='main_img_text'>WHO IS IU?</span>
                        <img src={main_visual_1} />
                    </p>
                </div>
                <div className='main_3'>
                    <div className='main_dance'>
                        <div className='main_dance_video'>
                        <video autoPlay loop preload muted playsinline poster><source src={iu}></source></video>
                        </div>
                        <div className='main_dance_text'>
                            <p>Dancing Queen</p>
                            <a href='/more'>PHOTO 보러가기&nbsp;&nbsp;></a>
                        </div>
                    </div>
                </div>
                <div className='main_2'>
                    <div className='main_works_box'>
                        <div className='main_works_div main_works_text'>
                            <p className='main_works_title'>에잇</p><br></br>
                            <div className='main_works_lyrics'>
                                <p>
                                    <span>So are you happy now<br></br></span>
                                    <span>Finally happy now are you<br></br></span>
                                    <span>뭐 그대로야 난<br></br></span>
                                    <span>다 잃어버린 것 같아<br></br></span>다 잃어버린 것 같아<br></br>
                                    <span>모든 게 맘대로 왔다가 인사도 없이 떠나<br></br></span>
                                    <span>이대로는 무엇도 사랑하고 싶지 않아<br></br></span>
                                    <span>다 해질 대로 해져버린<br></br></span>
                                    <span>기억 속을 여행해<br></br></span>
                                    <span>우리는 오렌지 태양 아래<br></br></span>
                                    <span>그림자 없이 함께 춤을 춰<br></br></span>
                                    <span>정해진 이별 따위는 없어<br></br></span>
                                    <span>아름다웠던 그 기억에서 만나<br></br></span>
                                    <span>Forever young<br></br></span> 
                                    ...
                                </p>
                            </div><br></br>
                            <a className='main_works_link' href='/more'>발매곡 확인하기&nbsp;&nbsp;></a>
                        </div>
                        <div className='main_works_div main_works_img'>
                            <img src={main_1} />
                        </div>
                    </div>
                </div>
                
            </div>
            <footer>

            </footer>
        </div>
        
    );
};

export default Main;