import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = props => {
	return <div className="sidebarBox">
			<div className="sidebarOptionBox">
				<Link to="/about"><div className="sidebarOptionText">
					<p>Firm History</p>
				</div></Link>
			</div>
			<div className="sidebarOptionBox">
				<Link to="/contact"><div className="sidebarOptionText">
					<p>Contact Us</p>
				</div></Link>
			</div>
			<div className="sidebarOptionBox">
				<Link to="/team"><div className="sidebarOptionText">
					<p>Our Team</p>
				</div></Link>
			</div>
		</div>;
}

export default Sidebar;