import React from 'react'

const Team = () => {
  return (
    <section className="team">
        <div className="container">
          <h2 className="title">Meet Our Team</h2>
          <p id="subtitle">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>

          <div className="team-cards">
            <div className="team-card">
              <img src="image/cover (2).png" alt="team member" />
              <p className="position">CO Founder</p>
              <h3 className="name">Avie Beaton</h3>
              <p className="description">the quick fox jumps over the lazy dog</p>
            </div>

            <div className="team-card">
              <img src="image/cover (3).png" alt="team member" />
              <p className="position">Consultant</p>
              <h3 className="name">Ben Jonson</h3>
              <p className="description">the quick fox jumps over the lazy dog</p>
            </div>

            <div className="team-card">
              <img src="image/cover (4).png" alt="team member" />
              <p className="position">Consultant</p>
              <h3 className="name">Rodney Stratton</h3>
              <p className="description">the quick fox jumps over the lazy dog</p>
            </div>

            <div className="team-card">
              <img src="image/cover (5).png" alt="team member" />
              <p className="position">Consultant</p>
              <h3 className="name">Ben Jonson</h3>
              <p className="description">the quick fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Team
