import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='dashboard-main'>
            <div className='dashboard-actions'>
                <div className='dashboard-data'>
                    <div className='category-wrapper'>
                        <div className="category-container">
                            <div className="category-box">
                                <Link to="/resorts" className="category-button">
                                    <span className="category-title">Resorts</span>
                                </Link>
                            </div>
                        </div>
                        <div className="category-container">
                            <div className="category-box">
                                <Link to="/villas" className="category-button">
                                    <span className="category-title">Villas</span>
                                </Link>
                            </div>
                        </div>
                        <div className="category-container">
                            <div className="category-box">
                                <Link to="/hotels" className="category-button">
                                    <span className="category-title">Hotels</span>
                                </Link>
                            </div>
                        </div>
                        <div className="category-container">
                            <div className="category-box">
                                <Link to="/treehouses" className="category-button">
                                    <span className="category-title">Treehouses</span>
                                </Link>
                            </div>
                        </div>
                        <div className="category-container">
                            <div className="category-box">
                                <Link to="/camping" className="category-button">
                                    <span className="category-title">Camping</span>
                                </Link>
                            </div>
                        </div>
                        <div className="category-container">
                            <div className="category-box">
                                <Link to="/homestays" className="category-button">
                                    <span className="category-title">Homestays</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
