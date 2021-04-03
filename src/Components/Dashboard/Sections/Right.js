import React,{useEffect,useState} from 'react'
import { connect } from "react-redux";
import { Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Config from '../../../BlockchainProvider/Config'

const Right = (props) => {
    const [refLink, setRefLink] = useState();
    const [copySuccess, setCopySuccess] = useState("");
    const [ref, setRef] = useState(Config.CONTRACT_ADDRESS);

    const getMyRefLink = (addr) => {
      return "https://trongalaxy.com/?ref=" + addr;
    };
    useEffect(() => {
      let url = window.location.href;
      let params = new URL(url).searchParams;
      localStorage.setItem("ref", params.get("ref"));
      if (localStorage.getItem("ref") != "")
        setRef(localStorage.getItem("ref"));
    }, [window.location.href]);
    useEffect(() => {
      if (props.account) {
        setRefLink(getMyRefLink(props.address));
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
          <i className="fa fa-id-card"></i>
          <span>
            {props.personalData ? props.personalData.personalData.id : "-"}
          </span>
        </div>
        <div className="user">
          <i className="fa fa-users"></i>
          <span>
            {props.personalData
              ? props.personalData.personalData.totalUsers
              : "-"}
          </span>
        </div>

        <div className="links mt-4">
          <h2>My Wallet</h2>
          <div className="aff-link">
            {props.account ? props.account.address : "0x"}
          </div>
        </div>
        <div className="links">
          <h2>Affiliate Wallet</h2>
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
        <ToastContainer/>

      </div>
    );
}
const mapStateToProps = (state) => {
    return {
        personalData: state.personalData,
        account: state.account,
    };
};
export default connect(mapStateToProps)(Right)