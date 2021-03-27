import React from 'react';
import './Dashboard.css';
import Right from './Sections/Right';
import TopNav from './Sections/TopNav';
import Left from './Sections/Left';
import Table from './Sections/Table';
import Header from './Sections/Header';
const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* <TopNav /> */}
            <Header/>
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