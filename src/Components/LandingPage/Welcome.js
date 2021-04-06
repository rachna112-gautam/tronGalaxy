import React from 'react'
import './LandingPage.scss'

const Welcome = () => {
  return (
    <section className="hero-section moving section-padding" id="home">

      {/* <div className="moving-bg" /> */}
      {/* Hero Content */}
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            {/* Welcome Content */}
            <div className="col-12 col-lg-12 col-md-12">
              <div className="welcome-content">
                <div className="promo-section">
                  {/* <h3 className="special-head dark">
                      Creative landing page template
                    </h3> */}
                </div>
                <h1
                  className="fadeInUp"
                  data-wow-delay="0.2s"
                  className="welcome-heading"
                >
                  Welcome To TronGalaxy Power
                  </h1>

                <div
                  className="dream-btn-group fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* <a href="index.html#" className="btn more-btn mr-3">
                      Whitepaper
                    </a> */}
                  <a href="/" className="btn more-btn">
                    Login
                    </a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
                <div
                  className="dotted mt-30 fadeInUp"
                  style={{}}
                  data-wow-delay="0.5s"
                >
                  <img src="img/core-img/platform1.png" alt="" />
                </div>
              </div>
             */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Welcome