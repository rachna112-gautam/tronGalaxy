import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Right from "./Sections/Right";
import Left from "./Sections/Left";
import Table from "./Sections/Table";
import TopNav from './Sections/TopNav';
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Logo from "../../assets/tron.png";
import Config from "./../../BlockchainProvider/Config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashboard = (props) => {
  const [contract, setContract] = useState();
  const [poolAmount, setPoolAmount] = useState([]);
  const [history, setHistory] = useState({});
  const [poolActivate, setPoolActivate] = useState(false);
  const [pool, setPool] = useState(0);
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
    console.log("props in dashboard-->", props)
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


    console.log("personalDataaaaaaaaa", props.personalData);
    let hold = parseInt(props.personalData.personalData.holdAmount * 10 ** 6);

    console.log("hold amount is------->", hold);
    if (props.personalData.personalData.currPool === 6 && props.personalData.personalData.directReferrals < 1) {
      toast.error('You must have 1 direct referral to buy 7th pool',
        { position: toast.POSITION.TOP_CENTER })
      return;
    }
    else if (props.personalData.personalData.currPool === 9 && props.personalData.personalData.directReferrals < 2) {
      toast.error('You must have 2 direct referral to buy 10th pool',
        { position: toast.POSITION.TOP_CENTER })
      return;
    }
    else if (props.personalData.personalData.currPool === 12 && props.personalData.personalData.directReferrals < 3) {
      toast.error('You must have 3 direct referral to buy 10th pool',
        { position: toast.POSITION.TOP_CENTER })
      return;
    }
    else if (props.personalData.personalData.currPool === 15 && props.personalData.personalData.directReferrals < 4) {
      toast.error('You must have 4 direct referral to buy 16th pool',
        { position: toast.POSITION.TOP_CENTER })
      return;
    }
    else if (props.personalData.personalData.currPool === 18 && props.personalData.personalData.directReferrals < 5) {
      toast.error('You must have 5 direct referral to buy 19th pool',
        { position: toast.POSITION.TOP_CENTER })
      return;
    }


    let amount = props.personalData.personalData.poolPrice[pool] - hold;
    console.log("amount", amount)
    if (amount < 0 || amount === undefined) {
      amount = 0;
    }
    console.log("amou", amount)
    if (hold) {
      await props.contract.contract.buyPool().send({
        from: props.account.address,
        callValue: amount,
        feeLimit: 1000000000
      });
      window.location.reload();
    }
    else {
      alert("hold amount undefined")
    }
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
      .send({
        from: props.account, callValue: 30000000 * props.personalData.personalData.dollars,
        feeLimit: 1000000000
      });
    window.location.reload();
  };



  useEffect(() => {
    console.log("persona data in table file is---->", props.personalData);

    if (!props.personalData) {
      console.log("contract not loaded");
      return;
    }
    setHistory(props.personalData.personalData.history);
    let currPool = props.personalData.personalData.currPool;
    setPool(currPool);
    if (currPool === 20) {
      setPool(0)
    }
  }, [props.personalData]);
  useEffect(() => {
    if (history && history.length > 0) {

      var time = history[history.length - 1].timestamp.toNumber();
      var s = new Date(time * 1000).getDate();
      const diff = Math.abs((new Date().getDate()) - s);
      console.log("date  diff", diff)
      if (diff < 7) {
        setPoolActivate(false)
      }
      else
        setPoolActivate(true);
    }
  }, [history])
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
                    ? poolAmount[pool]
                    : "0"}
                </span>
              </div>
              <div className="d-flex">
                <div className="icon-box">
                  <img src={Logo} alt="dhb" />
                </div>
                <span className="ml-3 font-weight-bold">
                  {props.personalData
                    ? poolAmount[pool] *
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

      <TopNav />

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
          {props.personalData ? props.personalData.personalData.isExist ?
            <button
              className="btn more-btn"
              data-toggle="modal"
              data-target="#enterModal"
              disabled
            >
              {" "}
            Enter
          </button> : <button
              className="btn more-btn"
              data-toggle="modal"
              data-target="#enterModal"
            >
              {" "}
          Enter
        </button> : ''
          }
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
  console.log("state--->", state)
  return {
    personalData: state.personalData,
    contract: state.contract,
    account: state.account,
  };
};

export default connect(mapStateToProps)(Dashboard);
