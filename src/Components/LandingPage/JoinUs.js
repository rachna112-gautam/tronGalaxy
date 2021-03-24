import React from 'react'

const JoinUs=()=>{
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
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contribution-c-wapper has-arrow-right-lg has-arrow-top-md has-arrow-right-md has-arrow-down-sm">
                {/* Content */}
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Icon */}
                  <div className="cycle_icon">
                    <span className="gradient-t orange">1</span>
                  </div>
                  <h6>Creative Chart Modules</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                    ipsum quam, maximus ut accumsan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-sm-30">
              <div className="contribution-c-wapper has-arrow-right-lg has-arrow-bottom-md has-arrow-down-sm">
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.3s"
                >
                  {/* Icon */}
                  <div className="cycle_icon">
                    <span className="gradient-t pink">2</span>
                  </div>
                  <h6>Adaptive Social Assistant</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                    ipsum quam, maximus ut accumsan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-s">
              <div className="contribution-c-wapper has-arrow-top-md has-arrow-down-sm">
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Icon */}
                  <div className="cycle_icon">
                    <span className="gradient-t blue">3</span>
                  </div>
                  <h6>Ecommerce Embedded</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                    ipsum quam, maximus ut accumsan.
                  </p>
                </div>
              </div>
            </div>
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
                Contribution Cycle
              </h2>
            </div>
            <div className="col-lg-4 hidden-md hidden-sm hidden-xs">
              <img src="img/svg/join-bottom.svg" className="arrow-img" alt="" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-30">
              <div className="contribution-c-wapper has-arrow-left-lg has-arrow-bottom-md has-arrow-down-sm">
                {/* Content */}
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Icon */}
                  <div className="cycle_icon">
                    <span className="gradient-t green">6</span>
                  </div>
                  <h6>Creative Chart Modules</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                    ipsum quam, maximus ut accumsan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-30">
              <div className="contribution-c-wapper has-arrow-left-lg has-arrow-left-md has-arrow-down-sm">
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.3s"
                >
                  {/* Icon */}
                  <div className="cycle_icon">
                    <span className="gradient-t green">5</span>
                  </div>
                  <h6>Adaptive Social Assistant</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                    ipsum quam, maximus ut accumsan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-30">
              <div className="contribution-c-wapper ">
                <div
                  className="service_single_content text-center mb-30 fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Icon */}
                  <div className="cycle_icon">
                    <span className="gradient-t pink">4</span>
                  </div>
                  <h6>Ecommerce Embedded</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                    ipsum quam, maximus ut accumsan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default JoinUs