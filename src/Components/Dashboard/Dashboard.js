import React from 'react';
import './Dashboard.css';
import Right from './Sections/Right';
import TopNav from './Sections/TopNav';
import Left from './Sections/Left';
import Table from './Sections/Table';
const Dashboard = () => {
    return (
        <div className="dashboard">
            <TopNav />
            <div className="row flex-wrap-reverse">
                <div className="col-lg-8">
                    <Left />
                </div>
                <div className="col-lg-4">

                    <Right />
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-12">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;