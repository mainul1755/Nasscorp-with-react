import React from 'react'

const ServiceSsection = () => {
  return (
     <section className="service-section">
        <div className="text-center">
          <h2>
            We are providing best <br /> <span>business service.</span>
          </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms <br /> of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="service-content">
           
          <div className="service-video">
            <img src="image/cover 1.jpg" alt="Meeting Room" />
            <div className="play-btn">
              <img src="icon/play btn.png" alt="" />
            </div>
          </div>

           
          <div className="service-text">
            <h3>
              Most trusted in <br /> our field
            </h3>
            <p>
              Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
            </p>

            <div className="feature">
              <img src="icon/Vector 1.png" alt="" />
              <div>
                <h4>the quick fox jumps over the lazy dog</h4>
                <p>Things on a very small scale ...</p>
              </div>
            </div>

            <div className="feature">
              <img src="icon/vector 2.png" alt="" />
              <div>
                <h4>the quick fox jumps over the lazy dog</h4>
                <p>Things on a very small scale ...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ServiceSsection
