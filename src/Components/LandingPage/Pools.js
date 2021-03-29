import React, { useState } from "react";

const Pools = () => {
  const [poolName, setPoolName] = useState("POOLS");

  const createPools = () => {
    let pools=[]
    return (
      <div className="col-lg-2 col-sm-6 col-xs-12">
        <div className="pricing-item ">
          <h4>Pool 1</h4>
          <h3>
            <strong className="xzc-1-month">0.96$</strong>
          </h3>
          <span>1 ETH = 500 Token</span>

          <label>
            <strong>42% bonus</strong>
          </label>
        </div>
      </div>
    );
  };
  return (
    <section className="features section-padding-0-70 ">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="fadeInUp" data-wow-delay="0.3s">
            {poolName}
          </h2>
        </div>
        <div className="row align-items-center pools-row">
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 1</h4>
              <h3>
                <strong className="xzc-1-month">30$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>5$ Return</strong>
              </label>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 2</h4>
              <h3>
                <strong className="xzc-1-month">60$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>10$ return</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 3</h4>
              <h3>
                <strong className="xzc-1-month">1.50$</strong>
              </h3>

              <div className="pricing">15,000,000 Token</div>
              <label>
                <strong>25% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 4</h4>
              <h3>
                <strong className="xzc-1-month">1.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>15% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 4</h4>
              <h3>
                <strong className="xzc-1-month">1.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>15% bonus</strong>
              </label>
            </div>
          </div>
        </div>
        <div className="row align-items-center pools-row">
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 1</h4>
              <h3>
                <strong className="xzc-1-month">0.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>42% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 2</h4>
              <h3>
                <strong className="xzc-1-month">1.25$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>35% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 3</h4>
              <h3>
                <strong className="xzc-1-month">1.50$</strong>
              </h3>

              <div className="pricing">15,000,000 Token</div>
              <label>
                <strong>25% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 4</h4>
              <h3>
                <strong className="xzc-1-month">1.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>15% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 4</h4>
              <h3>
                <strong className="xzc-1-month">1.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>15% bonus</strong>
              </label>
            </div>
          </div>
        </div>
        <div className="row align-items-center pools-row">
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 1</h4>
              <h3>
                <strong className="xzc-1-month">0.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>42% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 2</h4>
              <h3>
                <strong className="xzc-1-month">1.25$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>35% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 3</h4>
              <h3>
                <strong className="xzc-1-month">1.50$</strong>
              </h3>

              <div className="pricing">15,000,000 Token</div>
              <label>
                <strong>25% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 4</h4>
              <h3>
                <strong className="xzc-1-month">1.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>15% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 4</h4>
              <h3>
                <strong className="xzc-1-month">1.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>15% bonus</strong>
              </label>
            </div>
          </div>
        </div>
        <div className="row align-items-center pools-row">
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 1</h4>
              <h3>
                <strong className="xzc-1-month">0.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>42% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 2</h4>
              <h3>
                <strong className="xzc-1-month">1.25$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>35% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 3</h4>
              <h3>
                <strong className="xzc-1-month">1.50$</strong>
              </h3>

              <div className="pricing">15,000,000 Token</div>
              <label>
                <strong>25% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 4</h4>
              <h3>
                <strong className="xzc-1-month">1.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>15% bonus</strong>
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="pricing-item ">
              <h4>Pool 4</h4>
              <h3>
                <strong className="xzc-1-month">1.96$</strong>
              </h3>
              <span>1 ETH = 500 Token</span>

              <label>
                <strong>15% bonus</strong>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pools;
