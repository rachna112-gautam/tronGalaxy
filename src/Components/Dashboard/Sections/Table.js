import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"

export default function Table(props) {
    const [history, setHistory] = useState({})
    useEffect(() => {
        if (props.personalData) {
            setHistory(props.personalData.history);
        }

    }, [])

    return (

        <div className="btm-table">
            <h4>History</h4>
            {console.log("hi", history)}
            <div className="table-responsive">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>PH</th>
                            <th>GROWTH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>04-Feb-2021 14:56:45</td>
                            <td>$30(570 TRX)</td>
                            <td>$45(855 TRX)</td>
                        </tr>
                        <tr>
                            <td>12-Feb-2021 08:26:39</td>
                            <td>$60(1140 TRX)</td>
                            <td>$90(1710 TRX)</td>
                        </tr>
                        <tr>
                            <td>21-Feb-2021 16:35:54</td>
                            <td>	$90(1710 TRX)</td>
                            <td>$135(2565 TRX)</td>
                        </tr>
                        <tr>
                            <td>12-Feb-2021 08:26:39</td>
                            <td>$60(1140 TRX)</td>
                            <td>$90(1710 TRX)</td>
                        </tr>
                        <tr>
                            <td>21-Feb-2021 16:35:54</td>
                            <td>$90(1710 TRX)</td>
                            <td>$135(2565 TRX)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        personalData: state.personalData,
    };
};
connect(mapStateToProps)(Table);