import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Right from "./Sections/Right";
import Left from "./Sections/Left";
import Table from "./Sections/Table";
import Header from "./Sections/Header";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Logo from "../../assets/tron.png";
const Dashboard = (props) => {
  const [contract, setContract] = useState();
//   const [directReferrals,setDirectReferrals]=useState();
//   const [referrerIncome, setReferrerIncome] = useState();
//   const [currPool, setCurrPool] = useState();
//   const [totalMembers, setTotalMembers] = useState();
//   const [holdAmount, setHoldAmount] = useState();
//   const [unreleasedAmount,setUnreleasedAmount]=useState();


  
  console.log("contract in dashboard ------>",props.contract);
  console.log("account in dashboard----->",props.account);
  console.log("personalDataaaaaaaaa", props.personalData);
  
//   useEffect(() => {
//       personalData()
//   }, [props.personalData])

//   const personalData=async()=>{
//       if (!props.personalData || !props.account) {
//         return;
//       }
//       let currPool = props.personalData.personalData.currPool;
//       setCurrPool(currPool);
//       let hold = props.personalData.personalData.holdAmount;
//       setHoldAmount(hold);
//       let directReferrals=props.personalData.personalData.directReferrals;
//       setDirectReferrals(directReferrals)
//       let referrerIncome = props.personalData.personalData.referrerIncome;
//       setReferrerIncome(referrerIncome);
//       let totalMembers = props.personalData.personalData.totalMembers;
//       setTotalMembers(totalMembers);
//       let unreleasedAmount = props.personalData.personalData.releasedAmount;
//       setUnreleasedAmount(unreleasedAmount)
      
//   }

  const upgradePool = async () => {
    if (!props.personalData || !props.account) {
      return;
    }
    

    let currPool = props.personalData.personalData.currPool;
    console.log("personalDataaaaaaaaa", props.personalData);
    let hold = props.personalData.personalData.holdAmount;
    
    console.log("hold amount is------->",hold)
    
    // console.log("hold..", typeof props.personalData.currPool);
    await props.contract.contract.methods
      .buyPool()
      .send({
        from: props.account.address,
        callValue: props.personalData.personalData.poolPrice[currPool] - hold,
      });
  };

  const enter = async () => {
    if (!props.contract.contract || !props.personalData.personalData || !props.account) {
      alert("content not loaded");
      return;
    }

    if (props.personalData.personalData.isExist) {
      alert("user already exist");
      return;
    }

    await props.contract.contract.methods
      .enterSystem("TYPGbv47eFGBCDvjrPZNgXs3JfrqPMTWS9")
      .send({ from: props.account, callValue: 30000000 });
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
                <span className="ml-3 font-weight-bold">200</span>
              </div>
              <div className="d-flex">
                <div className="icon-box">
                  <img src={Logo} alt="dhb" />
                </div>
                <span className="ml-3 font-weight-bold">20</span>
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
                <span className="ml-3 font-weight-bold">200</span>
              </div>
              <div className="d-flex">
                <div className="icon-box">
                  <img src={Logo} alt="dhb" />
                </div>
                <span className="ml-3 font-weight-bold">20</span>
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
        <Col xs="6" sm="6" lg="12" className="upgrade-pool">
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
          <Table />
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
