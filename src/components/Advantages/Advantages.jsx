/* eslint-disable no-unused-vars */
import React from 'react'
import "./Advantages.css"
import Phone2 from "../../assets/phone2.png"
import Bell from "../../assets/bell.png"
import Star from "../../assets/star.png"
import Phone from "../../assets/phone.png"
const Adv = () => {
    return (
        <div>
            <section className="advantages">
                <div className="rightsection">
                    <h3>ADVANTAGES</h3>
                    <h1>Why Choose Uifry</h1>
                    <div className="features2-points">
                        <h2 className="features2-title"><img className='features2-points-img' src={Bell} alt="" />clever notifications</h2>
                        <p className='features2-title-content'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                </div>
                <div className="leftsection">
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <img className="mobilephone" src={Phone2} alt="" />

                </div>
            </section>
            <section className='features2' >
            <div className="leftsection">
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <img className="mobilephone" src={Phone} alt="" />
                </div>
                <div className="rightsection">
                    <div className="ellipser"></div>
                    <div className="ellipser"></div>
                    <div className="features2-points">
                        <div className="features2-title"><img className='features2-points-img' src={Star} alt="" />fully customizable</div>
                        <p className="features2-title-content">
                            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                        </p>
                    </div>
                </div>
                

            </section>
        </div>
    )
}

export default Adv
