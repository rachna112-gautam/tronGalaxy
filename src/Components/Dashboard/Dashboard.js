import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Right from "./Sections/Right";
import Left from "./Sections/Left";
import Table from "./Sections/Table";
import Header from "./Sections/Header";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Logo from '../../assets/tron.png';
const Dashboard = (props) => {
    const [contract, setContract] = useState();
    const [poolsPrice, setPoolsPrice] = useState([]);
    const [dollar, setDollar] = useState();
    
    useEffect(() => {
        setContract(contract);
        dollars();
    }, [props.account]);


    const dollars = () => {
        if (!props.contract || !props.account) {
            return;
        }
        let dollars =
            (props.contract.methods.dollars().call()).toNumber() / 10 ** 6;
        // console.log("dollar", dollars);
        setDollar(dollars);
        let poolPrice = [];
        for (let i = 0; i < 20; i++) {
            let res = (props.contract.poolsPrice(i).call()).toNumber();
            poolPrice[i] = res;
        }
        setPoolsPrice(poolPrice);
        // console.log("pool price", poolPrice);
    };

    const upgradePool = async () => {
        if (!props.personalData || !props.account) {
            return;
        }

        let currPool = props.personalData.currPool;
        // console.log("Current Pool", currPool);
        let hold = props.personalData.holdAmount * 10 ** 6;
        console.log("hold..", hold)
        await props.contract.methods
            .buyPool()
            .send({ from: props.account, callValue: poolsPrice[currPool] - hold });
    };

    const enter = async () => {
        if (!props.contract || !props.personalData || !props.account) {
            alert("content not loaded")
            return;
        }

        if (props.personalData.isExist) {
            alert("user already exist")
            return;
        }

        await props.contract.methods
            .enterSystem("TYPGbv47eFGBCDvjrPZNgXs3JfrqPMTWS9")
            .send({ from: props.account, callValue: 30000000 });
    };

    return (
        <div className="dashboard">
            <div className="modal fade" id="upgradePoolModal" tabindex="-1" role="dialog" aria-labelledby="upgradePoolModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Upgrade Pool</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div >
                                <i className="fa fa-dollar"></i>
                                <span className="ml-3 font-weight-bold">200</span>
                            </div>
                            <div className="d-flex">
                                <div className="icon-box"><img src={Logo} alt="dhb" /></div>
                                <span className="ml-3 font-weight-bold">20</span>
                            </div>

                        </div>
                        <div className="modal-btn">
                            <button type="button" onClick={() => { upgradePool(); }} className="btn btn-upgrade">Upgrade Pool</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="enterModal" tabindex="-1" role="dialog" aria-labelledby="enterModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Enter Modal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div >
                                <i className="fa fa-dollar"></i>
                                <span className="ml-3 font-weight-bold">200</span>
                            </div>
                            <div className="d-flex">
                                <div className="icon-box"><img src={Logo} alt="dhb" /></div>
                                <span className="ml-3 font-weight-bold">20</span>
                            </div>

                        </div>
                        <div className="modal-btn">
                            <button type="button" onClick={() => { enter() }} className="btn btn-upgrade">Enter</button>
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
                <Col xs="6" sm="6" lg="6">
                    <button
                        className="btn more-btn"

                        data-toggle="modal" data-target="#upgradePoolModal"
                    >
                        Upgrade Pool
          </button>
                </Col>
                <Col xs="6" sm="6" lg="6">
                    <button
                        className="btn more-btn"
                        data-toggle="modal" data-target="#enterModal"
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
        contractData: state.contractData
    };
};

export default connect(mapStateToProps)(Dashboard);
