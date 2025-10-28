import Header from "./components/header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CardContainer from "./CardContainer";
import ServiceSsection from "./ServiceSsection";
import Testimonials from "./Testimonials";
import Team from "./Team";
import "./App.css"; 

const App = () => {
  return (
    <main>
       
      <Header />

       
      <Hero />

       
      <Stats />

       
      <CardContainer />

       
     <ServiceSsection />

       
      <Testimonials />
       
      <Team />

       
      <section className="quote-section">
        <div className="container">
          <div className="content">
            <div className="text_1">
              <h2>
                We Have Branches All <br /> Over The World
              </h2>
              <p>
                The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century, 
                which gave some indications about how small things do behave, produced an increasing confusion which was Heisenberg, and Born.
              </p>
              <img src="image/pngwing 1.png" alt="world map" className="map" />
            </div>
          </div>
        </div>
      </section>

       
      <section className="form-section">
        <div className="content_1">
          <div className="form_img">
            <img src="image/media.png" alt="" />
          </div>
          <div className="form-box">
            <h3>Get A Free Quote Here</h3>
            <form>
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Full Name" required />

              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="example@gmail.com" required />

              <label htmlFor="department">Department*</label>
              <select id="department" required>
                <option value="">Please Select</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="marketing">Marketing</option>
              </select>

              <label htmlFor="time">Time*</label>
              <select id="time" required>
                <option value="">4:00 Available</option>
                <option value="5pm">5:00 Available</option>
                <option value="6pm">6:00 Available</option>
              </select>

              <button type="submit" className="btn_1">Book Appointment</button>
            </form>
          </div>
        </div>
      </section>

       
      <Footer />
    </main>
  );
};

export default App;
