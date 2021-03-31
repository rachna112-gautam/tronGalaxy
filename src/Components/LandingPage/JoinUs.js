import React from 'react'
import './LandingPage.scss'
const JoinUs = () => {
  return (
    <section className="join-us section-padding-0-100 clearfix" id="services">
      <div className="container">
        <div className="section-heading text-center hidden-lg">
          {/* Dream Dots */}
          <div
            className="dream-dots justify-content-center fadeInUp"
            data-wow-delay="0.2s"
          >
            <span>Our Services</span>
          </div>
          <h2 className="fadeInUp" data-wow-delay="0.3s">
            What we speciaized in
            </h2>
          <p className="fadeInUp" data-wow-delay="0.4s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
        </div>
        <div className="row dark-row pt-60">

          <div className="col-lg-4 hidden-md hidden-sm hidden-xs">
            <img
              src="img/svg/join-bottom.svg"
              className="arrow-img rotated"
              alt=""
            />
          </div>
          <div className="col-lg-4 text-center hidden-md hidden-sm hidden-xs">
            <div
              className="dream-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Join us</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              How It Work?
              </h2>
          </div>
          <div className="col-lg-4 hidden-md hidden-sm hidden-xs">
            <img src="img/svg/join-bottom.svg" className="arrow-img" alt="" />
          </div>
          <div className="row howitworks">
            <div className="col-6 col-md-6 col-lg-3 col-sm-6 how-boxx">
              <div className="contribution-c-wapper has-arrow-left-lg has-arrow-bottom-md has-arrow-down-sm">
                {/* Content */}
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Icon */}
                  {/* <div className="cycle_icon">
                    <span className="gradient-t green">6</span>
                  </div> */}
                  <h1>$30=Trx?</h1>

                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3 col-sm-6 how-boxx">
              <div className="contribution-c-wapper has-arrow-left-lg has-arrow-left-md has-arrow-down-sm">
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.3s"
                >
                  {/* Icon */}
                  {/* <div className="cycle_icon">
                    <span className="gradient-t green">5</span>
                  </div> */}
                  <h1>Growth</h1>
                  <h6>
                    Just Invest in one time get regular growth
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3 col-sm-6 how-boxx">
              <div className="contribution-c-wapper ">
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Icon */}
                  {/* <div className="cycle_icon">
                    <span className="gradient-t pink">4</span>
                  </div> */}
                  <h1>300%</h1>
                  <h6>On your first investment you will get</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default JoinUs