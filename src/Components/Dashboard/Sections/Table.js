import React, { useEffect, useState, useRefresh } from "react";
import { connect } from "react-redux";

function Table(props) {
  console.log("his in table-->", props.history)

  const [history, setHistory] = useState(props.history)
  useEffect(() => {
    if (props.personalData)
      setHistory(props.personalData.personalData.history)
  }, [props.personalData])
  // useEffect(() => {
  //   if (!history && props.personalData)
  //     setHistory(props.personalData.personalData.history);

  //   // historyTable();
  // }, [props.personalData])

  // function historyTable(){
  //   let table=[{}];
  //   if(props.history){
  //       for(let i=0;i<props.history.length;i++){
  //         table.push(props.history[i])
  //         console.log("table is---->",history[i]);
  //       }
  //   }
  //   else{
  //     alert("history is not loaded");
  //   }
  //   return table;

  // }

  return (
    <div className="btm-table">
      <h4>History</h4>
      <div className="table-responsive">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th>DATE</th>
              <th>POOL</th>
              <th>AMOUNT($)</th>
              <th>AMOUNT(TRX)</th>
            </tr>
          </thead>
          <tbody>
            {
              history && history.length > 0 ? history.map((item, i) => {
                const time = item.timestamp.toNumber();
                var s = new Date(time * 1000).toLocaleDateString("en-US");
                // console.log("history", s, item.pool.toNumber(), item.amount.toNumber(),item.price.toNumber())
                // console.log("histor length is---->",history.length)
                return <tr key={i}>
                  <td>{s}</td>
                  <td>{item.pool.toNumber()}</td>
                  <td>{parseFloat(item.amount.toNumber() / item.price.toNumber()).toFixed(2)}</td>
                  <td>{item.amount.toNumber() / 10 ** 6}</td>
                </tr>
              }) : " "
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    personalData: state.personalData,
    contract: state.contract,
    account: state.account,
  };
};
export default connect(mapStateToProps)(Table);
