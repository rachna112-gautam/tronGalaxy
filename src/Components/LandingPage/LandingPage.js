import React from 'react'
import AboutUs from './AboutUs';
import Header from './Header'
import JoinUs from './JoinUs';
import Welcome from './Welcome';
import './LandingPage.scss'
import logo from '../../assets/TronGalaxyPower.png'

const LandingPage = () => {
  return (
    <div>
      <Header />
      {/* ##### Header Area End ##### */}
      {/* ##### Welcome Area Start ##### */}
      <Welcome />
      {/* ##### Welcome Area End ##### */}
      <div className="clearfix" />
      {/* ##### About Us Area Start ##### */}

      {/* ##### About Us Area End ##### */}
      <AboutUs />
      {/* ##### Our Services Area Start ##### */}
      <JoinUs />
      {/* ##### About Us Area Start ##### */}
      <section className="about-us-area section-padding-0-100 clearfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div
                  className="dream-dots text-left fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span className="gradient-text ">
                    Decentralized Trading Platform
                     </span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">
                  Connect blockchain to the real world and start crypto
                  tading.
                   </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis at dictum risus, non suscipit arcu. Quisque aliquam
                  posuere tortor, sit amet convallis nunc scelerisque in.
                   </p>
                <p className="fadeInUp" data-wow-delay="0.5s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit ipsa ut quasi adipisci voluptates, voluptatibus
                  aliquid alias beatae reprehenderit incidunt iusto
                  laboriosam.
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
            <img
              className="supportImg"
              src="img/svg/trading-strokes.svg"
              alt="image"
            />
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
              <div
                className="welcome-meter floating-anim fadeInUp"
                data-wow-delay="0.7s"
              >
                <img src="img/core-img/computer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### About Us Area End ##### */}
    
      
      <div className="faq-timeline-area section-padding-0-85" id="faq">
        <div className="container">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Token FAQ</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              {" "}
                 Frequently Questions
               </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
               </p>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12">
              <img
                src="img/svg/faq.svg"
                alt=""
                className="center-block img-responsive"
              />
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="dream-faq-area mt-s ">
                <dl style={{ marginBottom: 0 }}>
                  {/* Single FAQ Area */}
                  <dt className="wave fadeInUp" data-wow-delay="0.2s">
                    What are the objectives of this Token?
                     </dt>
                  <dd className="fadeInUp" data-wow-delay="0.3s">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt
                      accusamus enim necessitatibus est fugiat, assumenda
                      dolorem, deleniti corrupti cupiditate ipsum, dolorum
                      voluptatum esse error?
                       </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave fadeInUp" data-wow-delay="0.3s">
                    What is the best features and services we deiver?
                     </dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt
                      accusamus enim necessitatibus est fugiat, assumenda
                      dolorem, deleniti corrupti cupiditate ipsum, dolorum
                      voluptatum esse error?
                       </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave fadeInUp" data-wow-delay="0.4s">
                    Why this ICO important to me?
                     </dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt
                      accusamus enim necessitatibus est fugiat, assumenda
                      dolorem, deleniti corrupti cupiditate ipsum, dolorum
                      voluptatum esse error?
                       </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave fadeInUp" data-wow-delay="0.5s">
                    how may I take part in and purchase this Token?
                     </dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt
                      accusamus enim necessitatibus est fugiat, assumenda
                      dolorem, deleniti corrupti cupiditate ipsum, dolorum
                      voluptatum esse error?
                       </p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### FAQ & Timeline Area End ##### */}
      {/* ##### Team Area Start ##### */}
     
      <footer
        className="footer-area bg-img"
        style={{ backgroundImage: "url(img/core-img/pattern.png)" }}
      >
        {/* ##### Contact Area Start ##### */}
        <div className="contact_us_area section-padding-0-0" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  {/* Dream Dots */}
                  <div
                    className="dream-dots justify-content-center fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <span className="gradient-text">Contact us</span>
                  </div>
                  <h2 className="fadeInUp" data-wow-delay="0.3s">
                    Contact With Us
                     </h2>
                  <p className="fadeInUp" data-wow-delay="0.4s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
                    commodo.
                     </p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="contact_form">
                  <form
                    action="index.html#"
                    method="post"
                    id="main_contact_form"
                    noValidate
                  >
                    <div className="row">
                      <div className="col-12">
                        <div id="success_fail_info" />
                      </div>
                      <div className="col-12 col-md-6">
                        <div
                          className="group fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Name</label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div
                          className="group fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <input
                            type="text"
                            name="email"
                            id="email"
                            required
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="group fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="group fadeInUp"
                          data-wow-delay="0.5s"
                        >
                          <textarea
                            name="message"
                            id="message"
                            required
                            defaultValue={""}
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Message</label>
                        </div>
                      </div>
                      <div
                        className="col-12 text-center fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <button type="submit" className="btn more-btn">
                          Send Message
                           </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Contact Area End ##### */}
        <div className="footer-content-area ">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="footer-copywrite-info">
                  {/* Copywrite */}
                  <div
                    className="copywrite_text fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="footer-logo">
                      <a href="index.html#">
                        <img src={logo} alt="logo" className="logo" />
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Velit ducimus voluptatibus neque illo id repellat
                      quisquam? Autem expedita earum quae laborum ipsum ad.
                       </p>
                  </div>
                  {/* Social Icon */}
                  <div
                    className="footer-social-info fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <a href="index.html#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="index.html#">
                      {" "}
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="index.html#">
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </a>
                    <a href="index.html#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="index.html#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <div className="contact_info_area d-sm-flex justify-content-between">
                  {/* Content Info */}
                  <div
                    className="contact_info mt-x text-center fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <h5>PRIVACY &amp; TOS</h5>
                    <a href="index.html">
                      <p>Advertiser Agreement</p>
                    </a>
                    <a href="index.html">
                      <p>Acceptable Use Policy</p>
                    </a>
                    <a href="index.html">
                      <p>Privacy Policy</p>
                    </a>
                    <a href="index.html">
                      <p>Technology Privacy</p>
                    </a>
                    <a href="index.html">
                      <p>Developer Agreement</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2 col-md-6 ">
                {/* Content Info */}
                <div className="contact_info_area d-sm-flex justify-content-between">
                  <div
                    className="contact_info mt-s text-center fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <h5>NAVIGATE</h5>
                    <a href="index.html">
                      <p>Advertisers</p>
                    </a>
                    <a href="index.html">
                      <p>Developers</p>
                    </a>
                    <a href="index.html">
                      <p>Resources</p>
                    </a>
                    <a href="index.html">
                      <p>Company</p>
                    </a>
                    <a href="index.html">
                      <p>Connect</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-6 ">
                <div className="contact_info_area d-sm-flex justify-content-between">
                  {/* Content Info */}
                  <div
                    className="contact_info mt-s text-center fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h5>CONTACT US</h5>
                    <p>Mailing Address:xx00 E. Union Ave</p>
                    <p>Suite 1100. Denver, CO 80237</p>
                    <p>+999 90932 627</p>
                    <p>support@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}

export default LandingPage