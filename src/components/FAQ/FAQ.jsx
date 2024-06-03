import React from 'react'
import "./FAQ.css"
import Phone3 from '../../assets/phone3.png'
import Phone4 from '../../assets/phone4.png'
import Phone5 from '../../assets/phone5.png'
import apple from '../../assets/apple.png'
// import Phone3 from '../../assets/phone3.png'



const FAQ = () => {
    return (
        <div className="testbanner">
            <div className='question'>
                <h3 className="beforeheading">FAQ</h3>
                <h1 className="heading">Frequently Asked Questions</h1>
                <div className="question_flexbox">
                    <div className="flexbox_content">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="flexbox_content">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="flexbox_content">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="flexbox_content">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="flexbox_content">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="flexbox_content">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                </div>
            </div>
            <section className="banner">
                <div className='group1'>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                </div>
                <div className='banner_content'><h1>Ready To Get Started?</h1>
                <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
                <button>Download App <img src={apple} alt="" /></button></div>
                <div className='mobile_phones'>
                    <img src={Phone3} alt="" /><img src={Phone4} alt="" /><img src={[Phone5]} alt="" />
                </div>
                <div className='group2'>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div></div>
            </section>
        </div>
    )
}

export default FAQ
