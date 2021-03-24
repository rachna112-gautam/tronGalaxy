import React from 'react';
import './../Dashboard.css';
import Box from './Box';
export default function Left() {
    return (
        <div className="right">
            <div className="row ml-0 mr-0">
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="provide help" value="300" icon="dollar" number="1" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="growth income" value="386" icon="dollar" number="2" />
                </div>

                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="direct income" value="9398" icon="btc" number="3" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="level income" value="300" icon="btc" number="4" />
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="direct member" value="386" icon="user" number="5" />
                </div>

                <div className="col-lg-4 col-sm-6 col-md-6">
                    <Box title="total member" value="9398" icon="users" number="6" />
                </div>
            </div>
        </div>
    )
}
