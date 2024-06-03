import React from 'react'
import "./Homefirst.css"
import strip_img from "../../assets/Strip.png"
import phone6 from "../../assets/phone6.png"
import phone7 from "../../assets/phone7.png"
// import phone8 from "../../assets/Strip.png"
const Homefirst = () => {
    return (
        <div>
            <section className="homefirst">

                <div className="rightsection">
                    <div className="ellipser"></div>
                    <div className="ellipser"></div>
                    <h1>make the best financial decisions</h1>
                    <h3>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h3>
                    <div>
                    <button className='started'>Get Started</button>
                    <button className='watchvideo'>Watch Video</button>
                    </div>
                    <div className="imagesection"><img src={strip_img} alt="" /></div>
                </div>
                <div className="leftsection">
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="ellipse"></div>
                    <div className="innerimg">
                    <img className="mobilephone" src={phone6} alt="" />
                    <img className="mobilephone" src={phone7} alt="" />
                    <img className="mobilephone" src={phone6} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homefirst
