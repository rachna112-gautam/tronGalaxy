import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";

const Right = (props) => {


    return (
        <div className="right">
            <div className="user">
                <i className="fa fa-id-card"></i>
                <span>{props.personalData ? props.personalData.id : "-"}</span>
            </div>
            <div className="user">
                <i className="fa fa-users"></i>
                <span>{props.contractData ? props.contractData.totalUsers : "-"}</span>
            </div>

            <div className="links mt-4">
                <h2>My Wallet</h2>
                <div className="aff-link">https://trongalaxypower</div>
            </div>
            <div className="links">
                <h2>Affiliate Wallet</h2>
                <div className="aff-link">https://trongalaxypower</div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        personalData: state.personalData,
        contractData: state.contractData,
        account: state.account,
    };
};
export default connect(mapStateToProps)(Right)