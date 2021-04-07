import React, { useState, useEffect } from "react";
import "./../Dashboard.css";
import Box from "./Box";
import { connect } from "react-redux";
const Left = (props) => {
  const [personalData, setPersonalData] = useState();

  useEffect(() => {
    personaldata();
  }, [props.personalData]);
  const personaldata = async () => {
    if (!props.personalData) {
      return;
    }
    let personalData = props.personalData.personalData;
    setPersonalData(personalData);
  };

  return (
    <div className="right">
      <div className="row ml-0 mr-0">
        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="Earned Amount"
            value={personalData ? personalData.earnedAmount / personalData.dollars : "-"}
            icon="dollar"
            number="4"
          />
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="Direct Referrals"
            value={personalData ? personalData.directReferrals : "-"}
            icon="users"
            number="1"
          />
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="Referrer Income"
            value={personalData ? personalData.referrerIncome / personalData.dollars : "-"}
            icon="dollar"
            number="2"
          />
        </div>

        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="Current Pool"
            value={personalData ? personalData.currPool : "-"}
            icon="arrow-circle-o-right"
            number="3"
          />
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="Cycles"
            value={personalData ? personalData.cycles : "-"}
            icon="recycle"
            number="6"
          />
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="Total Members"
            value={personalData ? personalData.totalMembers : "-"}
            icon="users"
            number="4"
          />
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="Hold Amount"
            value={personalData ? personalData.holdAmount / personalData.dollars : "-"}
            icon="dollar"
            number="5"
          />
        </div>

        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="UnReleased Amount"
            value={personalData ? personalData.prevHoldAmount / personalData.dollars : "-"}
            icon="dollar"
            number="5"
          />
        </div>

        <div className="col-lg-4 col-sm-6 col-md-6">
          <Box
            title="Released Amount"
            value={personalData ? personalData.releasedAmount / personalData.dollars : "-"}
            icon="dollar"
            number="6"
          />
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

export default connect(mapStateToProps)(Left);
