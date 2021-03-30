import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Right from "./Sections/Right";
import Left from "./Sections/Left";
import Table from "./Sections/Table";
import Header from "./Sections/Header";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

const Dashboard = (props) => {
    const [contract, setContract] = useState();
    const [poolsPrice, setPoolsPrice] = useState([]);
    const [dollar, setDollar] = useState();

    useEffect(() => {
        setContract(contract);
        dollars();
    }, [props.account]);


    const dollars = async () => {
        if (!props.contract || !props.account) {
            return;
        }
        let dollars =
            (await props.contract.methods.dollars().call()).toNumber() / 10 ** 6;
        // console.log("dollar", dollars);
        setDollar(dollars);
        let poolPrice = [];
        for (let i = 0; i < 20; i++) {
            let res = (await props.contract.poolsPrice(i).call()).toNumber();
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

        await props.contract.methods
            .buyPool()
            .send({ from: props.account, callValue: poolsPrice[currPool] });
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
            .send({ from: props.account, callValue: poolsPrice[0] });
    };

    return (
        <div className="dashboard">
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
                        onClick={() => {
                            upgradePool();
                        }}
                    >
                        Upgrade Pool
          </button>
                </Col>
                <Col xs="6" sm="6" lg="6">
                    <button
                        className="btn more-btn"
                        onClick={() => {
                            enter();
                        }}
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
