import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container">
          <h2 className="title">What Clients Say</h2>
          <p className="subtitle">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>

          <div className="testimonial-cards">
            <div className="card_2">
              <div className="profile">
                <img src="image/cover (1).png" alt="client" />
              </div>
              <h3>Regina Miles</h3>
              <p className="role">Designer</p>
              <div className="stars">
                <img src="icon/stars.png" alt="" />
              </div>
              <p className="text">
                This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.
              </p>
            </div>

            <div className="card_2">
              <div className="profile">
                <img src="image/cover (5).png" alt="client" />
              </div>
              <h3>Regina Miles</h3>
              <p className="role">Designer</p>
              <div className="stars">
                <img src="icon/stars.png" alt="" />
              </div>
              <p className="text">
                This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.
              </p>
            </div>

            <div className="card_2">
              <div className="profile">
                <img src="image/cover (2).png" alt="client" />
              </div>
              <h3>Regina Miles</h3>
              <p className="role">Designer</p>
              <div className="stars">
                <img src="icon/stars.png" alt="" />
              </div>
              <p className="text">
                This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.
              </p>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Testimonials
