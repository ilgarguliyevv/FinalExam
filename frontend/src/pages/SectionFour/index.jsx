import React from 'react'
import "./sectionfour.scss";

const SectionFour = () => {
  return (
    <div id='section'>
        <div className="section-title">
          <p>GUESTS SAYS</p>
          <h1>Our Satisfied Guests says</h1>
          <div className="section-all">
          <div className="section-first">
              <div className="section-card">
              <div className="section-about">
                <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa temporibus nemo necessitatibus cumque, quasi tempore quam possimus cupiditate error perspiciatis.</p>
                <h3>Dennis Green</h3>
                <p>Guest from Italy</p>
                </div>
              </div>
            </div>
            <div className="section-first">
              <div className="section-card">
                <div className="section-about">
                <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa temporibus nemo necessitatibus cumque, quasi tempore quam possimus cupiditate error perspiciatis.</p>
                <h3>Dennis Green</h3>
                <p className='guest'>Guest from Italy</p>
                </div>
              </div>
            </div> <div className="section-first">
              <div className="section-card">
              <div className="section-about">
                <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa temporibus nemo necessitatibus cumque, quasi tempore quam possimus cupiditate error perspiciatis.</p>
                <h3>Dennis Green</h3>
                <p>Guest from Italy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SectionFour