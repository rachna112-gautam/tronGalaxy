import React from 'react';
import Logo from './../../../assets/TronGalaxyPower.png';

export default function TopNav() {
    return (
        <nav class="top-navbar">
            <div class="container-fluid header">
                <a class="navbar-logo" href="/" aria-label="Tron Galaxy Power" >
                    <img src={Logo} alt="" />
                </a>
                <div className="top-info">
                    <div className="address w-100">
                        <span>Address</span>
                        <span>TQ84aa5mWZDnR64</span>
                    </div>
                    <div className="tron-info w-100">
                        <div className="btnn">0 TRX</div>
                        <div className="btnn">0 USD</div>
                    </div>
                </div>
                <div className="logout">
                    <button type="button" className="btn logout-btn" >Logout</button>
                </div>
            </div>
        </nav>
    )
}
