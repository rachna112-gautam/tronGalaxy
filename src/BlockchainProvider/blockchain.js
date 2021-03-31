import React, { Component, useEffect, useState } from "react";
import Config from "./Config";
import { connect } from "react-redux";
import {
    accountUpdate,
    onContractLoaded,
    onPersonalDataLoaded
} from "./../redux/actions";

const Blockchain = (props) => {
    const [account, setAccount] = useState();
    const [tronWeb, setTronWeb] = useState()
    const [loading, setLoading] = useState(true)
    const [contract, setContract] = useState();
    const [personalData, setPersonalData] = useState({});
    const [poolsPrice, setPoolsPrice] = useState([]);
    const [globalLoading, setGlobalLoading] = useState(true);

    useEffect(() => {
        if (!tronWeb && loading) {
            const interval = setInterval(() => {
                if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                    console.log("your wallet address", window.tronWeb.defaultAddress.base58);
                    setAccount(window.tronWeb.defaultAddress.base58);
                    setTronWeb(window.tronWeb);
                    setLoading(false)
                    clearInterval(interval);
                    return;
                }
            }, 1000)
        }
    }, []);

    // useEffect(() => {
    //     window.location.reload();
    // }, [window.tronWeb])

    useEffect(() => {
        if (!contract && tronWeb) {
            const interval = setInterval(() => {
                if (tronWeb) {
                    loadContract(window.tronWeb, window.tronWeb.defaultAddress.base58)
                    clearInterval(interval)
                    return;
                }
            }, 1000)
        }
    }, [tronWeb])

    useEffect(() => {
        if (contract) {
            const interval = setInterval(() => {
                initPersonalData()
                clearInterval(interval)
                return;
            }, 1000)
        }
    }, [contract, account]);

    useEffect(() => {
        props.dispatch(accountUpdate({
            address: account
        }))
    }, [account])

    useEffect(() => {
        props.dispatch(onPersonalDataLoaded({
            personalData
        }))
    }, [personalData])

    useEffect(() => {
        props.dispatch(onContractLoaded({
            contract
        }));
    }, [contract])

    const loadContract = async (_tronWeb, myWallet) => {
        let _contract = await _tronWeb.contract().at(Config.CONTRACT_ADDRESS);
        console.log("contract", _contract)
        setContract(_contract);
    };


    const initPersonalData = async () => {
        let res = await contract.users(account).call();
        let id = res.id.toNumber();
        let directReferrals = res.totalReferrals.toNumber();
        let referrerIncome = beautifyNumber(res.referralIncome, true);
        let currPool = res.currPool.toNumber();
        let earnedAmount = beautifyNumber(res.extraEarned, true);
        let cycles = res.cycles.toNumber();
        let isExist = res.isExist;
        let prevHoldAmount = beautifyNumber(res.prevHold, true);
        let totalMembers = (await contract.totalMembers(account).call()).toNumber();
        let holdAmount = beautifyNumber((await contract.methods.getHoldAmount(account).call()).amount, true);
        let releasedAmount = beautifyNumber(await contract.releasedAmount(account).call(), true);
        let contractBalance = beautifyNumber(await contract.methods.getContractBalance().call(), true);
        let totalUsers = (await contract.totalUsers().call()).toNumber();
        let admin1Wallet = beautifyNumber(await contract.admin1Wallet().call(), true);
        let admin2Wallet = beautifyNumber(await contract.admin2Wallet().call(), true);



        console.log("contract balance", contractBalance)
        console.log("total users", totalUsers)
        console.log("admin1", admin1Wallet)
        console.log("admin2", admin2Wallet)

        let dollars =
            (await contract.methods.dollars().call()).toNumber() / 10 ** 6;
        // console.log("dollar", dollars);
        let poolPrice = [];
        for (let i = 0; i < 20; i++) {
            let res = (await contract.poolsPrice(i).call()).toNumber();
            poolPrice[i] = res;
        }
        console.log("pool", poolPrice)
        setGlobalLoading(false)
        setPersonalData({
            id,
            directReferrals,
            referrerIncome,
            currPool,
            totalMembers,
            releasedAmount,
            earnedAmount,
            prevHoldAmount,
            holdAmount,
            cycles,
            isExist,
            contractBalance,
            totalUsers,
            poolPrice,
            dollars,
            globalLoading
        });

    };

    const beautifyNumber = (input, isFixed) => {
        let num = input / 10 ** 6;

        if (isFixed) {
            return num.toFixed(2);
        } else {
            return num;
        }
    };

    return (<></>);
}

const mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(Blockchain);