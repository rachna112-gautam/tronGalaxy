import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Config from "../../../BlockchainProvider/Config";
import "./../Dashboard.css";
const Right = (props) => {
  const [refLink, setRefLink] = useState();
  const [copySuccess, setCopySuccess] = useState("");
  const [url, setUrl] = useState("");
  const getMyRefLink = (addr) => {

    return url + "?ref=" + addr;
  };

  useEffect(() => {
    let url = window.location.origin;
    console.log("url is setting------>", url);

    setUrl(url)
  }, [window.location.origin]);

  useEffect(() => {
    if (props.account) {
      setRefLink(getMyRefLink(props.account.address));
    }

    console.log("pros.accout", props.address);
  }, [props.account]);


  function copyToClipboard(e) {
    var textField = document.createElement("textarea");
    textField.innerText = refLink;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setCopySuccess("Copied!");
    toast.success("Referral Link Copied");
  }

  return (
    <div className="right">
      <div className="user">
        <span className="right-title">User ID</span>
        <span>
          {props.personalData ? props.personalData.personalData.id : "-"}
        </span>
      </div>
      <div className="wallet-bal">
        <h2>Wallet balance</h2>
        <div className="balance">
          <i className="fa fa-dollar"></i>
          <span className="wallet-value">{props.personalData ? parseFloat(props.personalData.myTronBal / props.personalData.personalData.dollars).toFixed(2) : 0}</span>
        </div>
        <div className="balance">
          <i className="fa">TRX</i>
          <span className="wallet-value">{props.personalData ? parseInt(props.personalData.myTronBal).toFixed(2) : 0}</span>
        </div>
      </div>

      <div className="links mt-4">
        <h2>My Wallet</h2>
        <div className="aff-link">
          {props.account ? props.account.address : "0x"}
        </div>
      </div>
      <div className="links">
        <h2>Referral address</h2>
        <Input
          onChange={(t) => {
            copyToClipboard();
          }}
          type="text"
          name="amount"
          id="amount"
          value={refLink}
          className="ref-input"
          placeholder="Enter Amount"
          onClick={copyToClipboard}
        />
      </div>
      <ToastContainer />


    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    personalData: state.personalData,
    account: state.account,
  };
};
export default connect(mapStateToProps)(Right);
