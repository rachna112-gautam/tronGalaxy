import React from 'react'
import galaxy2 from '../../assets/galaxy2.png'

const AboutUs=()=>{
    return (
      <section className="about-us-area section-padding-100 clearfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <div className="welcome-meter fadeInUp" data-wow-delay="0.7s">
                <img src={galaxy2} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant mt-s">
                <div
                  className="dream-dots text-left fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span className="gradient-text ">
                    Decentralized Trading Platform
                  </span>
                </div>
                
                <p className="fadeInUp aboutus-heading" data-wow-delay="0.4s">
                  We created Tron Blockchain Smart Contract,
                  which is Decentralized for regular daily
                  money growth Technology Business System.
                  We committed for Trust, Ethics and
                  Business Value with 100% Transparency.

                </p>
                <p className="fadeInUp aboutus-heading" data-wow-delay="0.5s">
                  System is User friendly,attractive and simple
                </p>
                <a
                  className="btn more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  href="index.html#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default AboutUs