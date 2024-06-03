import React from 'react'
import P1 from "../../assets/p1.png"
import P2 from "../../assets/p2.png"
import P3 from "../../assets/p3.png"
import P4 from "../../assets/p4.png"
import P5 from "../../assets/p5.png"
import "./Testimonials.css"

const Testimonials = () => {
    return (
        <div>
            <h3 className='testimonial_title'>TESTIMONIAL</h3>
            <h1 className='testimonial_subtitle'>what our users say about us?</h1>
            <section className='Testimonials'>
                <div className="leftsection">
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="image_testimonial">
                        <div className="inner_image_testimonial">
                            <img className="mobilephone" src={P1} alt="" id='P1' />
                            <img className="mobilephone" src={P2} alt="" id='P2'/>
                        </div>
                        <div className="inner_image_testimonial">
                            <img className="mobilephone" src={P5} alt="" id='P5'/>
                        </div>
                        <div className="inner_image_testimonial">
                            <img className="mobilephone" src={P4} alt="" id='P4'/>
                            <img className="mobilephone" src={P3} alt="" id='P3'/>
                        </div>

                    </div>


                </div>
                <div className="rightsection">
                    <div className="ellipser"></div>
                    <div className="ellipser"></div>
                    <h3 className='testimonial_title1'>the best financial accounting app ever!</h3>
                    <h1 className='testimonial_content1'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</h1>
                    
                    
                </div>

            </section>
        </div>
    )
}

export default Testimonials
