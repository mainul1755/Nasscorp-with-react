  const CardContainer = () => {
   return (
     <section className="card-container">
        <div className="card">
          <img src="icon/card 1.png" alt="" />
          <h3>Business Growing</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <a href="#" className="btn">
            More <img src="icon/icn arrow.png" alt="" />
          </a>
        </div>

        <div className="card">
          <img src="icon/2.png" alt="" />
          <h3>Digital Marketing</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <a href="#" className="btn">
            More <img src="icon/icn arrow.png" alt="" />
          </a>
        </div>

        <div className="card">
          <img src="icon/card 3.png" alt="" />
          <h3>National top 50 firms</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <a href="#" className="btn">
            More <img src="icon/icn arrow.png" alt="" />
          </a>
        </div>

        <div className="card active">
          <img src="icon/card 4.png" alt="" />
          <h3>Digital Marketing</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <a href="#" className="btn btn-dark">More</a>
        </div>
      </section>
   )
 }
 
 export default CardContainer
 
