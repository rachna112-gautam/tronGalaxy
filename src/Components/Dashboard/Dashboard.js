import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Right from "./Sections/Right";
import Left from "./Sections/Left";
import Table from "./Sections/Table";
import Header from "./Sections/Header";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Logo from "../../assets/tron.png";
import Config from "./../../BlockchainProvider/Config";
const Dashboard = (props) => {
  const [contract, setContract] = useState();
  const [poolAmount, setPoolAmount] = useState([]);
  const [history, setHistory] = useState({});

  function setPoolPrice() {
    let price = [];

    for (let i = 1; i <= 20; i++) {
      price.push(i * 30);
    }
    setPoolAmount(price);
  }

  useEffect(() => {
    console.log("pool price in personal data----->", getPoolPrice());
    setPoolPrice();
  }, [props.personalData]);

  console.log("contract in dashboard ------>", props.contract);
  console.log("account in dashboard----->", props.account);
  console.log("personalDataaaaaaaaa", props.personalData);

  const getPoolPrice = () => {
    if (!props.personalData || !props.account) {
      return;
    }
    let poolPrice = props.personalData.personalData.dollars;
    return poolPrice;
  };

  const upgradePool = async () => {
    if (!props.personalData || !props.account) {
      return;
    }

    let currPool = props.personalData.personalData.currPool;
    console.log("personalDataaaaaaaaa", props.personalData);
    let hold = parseInt(props.personalData.personalData.holdAmount * 10 ** 6);

    console.log("hold amount is------->", hold);

    // console.log("hold..", typeof props.personalData.currPool);
    await props.contract.contract.methods.buyPool().send({
      from: props.account.address,
      callValue: props.personalData.personalData.poolPrice[currPool] - hold,
    });
    window.location.reload();
  };

  const enter = async () => {
    if (!props.contract.contract || !props.personalData.personalData) {
      alert("content not loaded");
      return;
    }

    if (props.personalData.personalData.isExist) {
      alert("user already exist");
      return;
    }
    let url = window.location.href;
    let params = new URL(url).searchParams;
    let _ref = params.get("ref");
    if (_ref === null) {
      _ref = Config.CONTRACT_ADDRESS;
    }
    await props.contract.contract.methods
      .enterSystem(_ref)
      .send({ from: props.account, callValue: 30000000 });
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <div
        className="modal fade"
        id="upgradePoolModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="upgradePoolModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Upgrade Pool
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <i className="fa fa-dollar"></i>
                <span className="ml-3 font-weight-bold">
                  {props.personalData
                    ? poolAmount[props.personalData.personalData.currPool]
                    : "0"}
                </span>
              </div>
              <div className="d-flex">
                <div className="icon-box">
                  <img src={Logo} alt="dhb" />
                </div>
                <span className="ml-3 font-weight-bold">
                  {props.personalData
                    ? poolAmount[props.personalData.personalData.currPool] *
                      parseInt(props.personalData.personalData.dollars)
                    : "0"}
                </span>
              </div>
            </div>
            <div className="modal-btn">
              <button
                type="button"
                onClick={() => {
                  upgradePool();
                }}
                className="btn btn-upgrade"
              >
                Upgrade Pool
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="enterModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="enterModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Enter Modal
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <i className="fa fa-dollar"></i>
                <span className="ml-3 font-weight-bold">30</span>
              </div>
              <div className="d-flex">
                <div className="icon-box">
                  <img src={Logo} alt="dhb" />
                </div>
                <span className="ml-3 font-weight-bold">
                  {props.personalData
                    ? parseInt(props.personalData.personalData.dollars) * 30
                    : "---"}
                </span>
              </div>
            </div>
            <div className="modal-input">
              {/* <label>Enter Referrer Address</label>
              <input
                type="text"
                id="referrer"
              
                className="form-control"
              /> */}
            </div>
            <div className="modal-btn">
              <button
                type="button"
                onClick={() => {
                  enter();
                }}
                className="btn btn-upgrade"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
      <Header />

      <div className="row flex-wrap-reverse">
        <div className="col-lg-8">
          <Left />
        </div>
        <div className="col-lg-4">
          <Right />
        </div>
      </div>
      <Row>
        <Col xs="12" sm="12" lg="12" className="upgrade-pool">
          <button
            className="btn more-btn upgrade-pool-btn"
            data-toggle="modal"
            data-target="#upgradePoolModal"
          >
            Upgrade Pool
          </button>
          <button
            className="btn more-btn"
            data-toggle="modal"
            data-target="#enterModal"
          >
            {" "}
            Enter
          </button>
        </Col>
      </Row>

      <div className="row ">
        <div className="col-lg-12">
          <Table history={history} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personalData: state.personalData,
    contract: state.contract,
    account: state.account,
  };
};

export default connect(mapStateToProps)(Dashboard);
