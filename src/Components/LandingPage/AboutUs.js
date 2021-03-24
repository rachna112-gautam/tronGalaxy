import React from 'react'

const AboutUs=()=>{
    return (
      <section className="about-us-area section-padding-100 clearfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <div className="welcome-meter fadeInUp" data-wow-delay="0.7s">
                <img src="img/core-img/about-1.png" alt="" />
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
                <h4 className="fadeInUp" data-wow-delay="0.3s">
                  Connect blockchain to the real world and start crypto tading.
                </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at dictum risus, non suscipit arcu. Quisque aliquam posuere
                  tortor, sit amet convallis nunc scelerisque in.
                </p>
                <p className="fadeInUp" data-wow-delay="0.5s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit ipsa ut quasi adipisci voluptates, voluptatibus
                  aliquid alias beatae reprehenderit incidunt iusto laboriosam.
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