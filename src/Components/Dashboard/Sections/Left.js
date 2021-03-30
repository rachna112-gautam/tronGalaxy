import React from 'react';
import './../Dashboard.css';
import Box from './Box';
import { connect } from "react-redux";
const Left = (props) => {

    return (
        <div className="right">
            <div className="row ml-0 mr-0">
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Direct Referrals" value={props.personalData ? props.personalData.directReferrals : "-"} icon="dollar" number="1" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Referrer Income" value={props.personalData ? props.personalData.referrerIncome : "-"} icon="dollar" number="2" />
                </div>

                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Current Pool" value={props.personalData ? props.personalData.currPool : "-"} icon="0" number="3" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Total Members" value={props.personalData ? props.personalData.totalMembers : "-"} icon="0" number="4" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Hold Amount" value={props.personalData ? props.personalData.holdAmount : "-"} icon="user" number="5" />
                </div>

                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="Unreleased Amount" value={props.personalData ? props.personalData.prevHoldAmount : "-"} icon="users" number="6" />
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

export default connect(mapStateToProps)(Left);
