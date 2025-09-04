import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">GiftLink</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {/* Task 1: Add links to Home and Gifts below */}
                                  <li className="nav-item">
                    <a className="nav-link" href="/home.html">Home</a> {/* Link to home.html */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/app">Gifts</a> {/* Updated Link */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
