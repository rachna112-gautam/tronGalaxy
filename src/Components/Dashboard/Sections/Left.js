import React from 'react';
import './../Dashboard.css';
import Box from './Box';
<<<<<<< HEAD
export default function Left(props) {
=======
import { connect } from "react-redux";
export default function Left(props) {
    console.log("personal data in left box is------->",props.personalData)
>>>>>>> 972595cf1538cf263e90825b7290e155b0df3429
    return (
        <div className="right">
            <div className="row ml-0 mr-0">
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Direct Referrals" value="300" icon="dollar" number="1" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Referrer Income" value="386" icon="dollar" number="2" />
                </div>

                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Current Pool" value="9398" icon="0" number="3" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Total Members" value="300" icon="0" number="4" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Hold Amount" value="386" icon="user" number="5" />
                </div>

                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Unreleased Amount" value="9398" icon="users" number="6" />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
    personalData: state.personalData,
    contract: state.contract,
    account: state.account,
  };
};

 connect(mapStateToProps)(Left);
