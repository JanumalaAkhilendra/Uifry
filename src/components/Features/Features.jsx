import React from 'react'
import Cube from "../../assets/cube.png"
import Cube2 from "../../assets/cube2.png"
import Star from "../../assets/star.png"
import Phone from "../../assets/phone.png"
import "./Features.css"
const Features = () => {
  return (
    <div>
      <section className='features'>
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
          <h3>FEATURES</h3>
          <h1>Uifry Premium</h1>
          <div className="features-points">

            <h2 className="features-title"><img className='features-points-img' src={Star} alt="" />budgeting intervals</h2>
            <p className="feature-title-content">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="features-points">
            <h2 className="features-title"><img className='features-points-img' src={Cube2} alt="" />budgeting intervals</h2>
            <p className="feature-title-content">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
          <div className="features-points">

            <h2 className="features-title"><img className='features-points-img' src={Cube} alt="" />budgeting intervals</h2>
            <p className="feature-title-content">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Features
