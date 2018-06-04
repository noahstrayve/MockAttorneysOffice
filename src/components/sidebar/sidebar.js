import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = props => {
	return <div className="sidebarBox">
			<Link to="/about"><div className="sidebarOptionBox">
				<div className="sidebarOptionText">
					<p>Firm History</p>
				</div>
			</div></Link>
			<Link to="/contact"><div className="sidebarOptionBox">
				<div className="sidebarOptionText">
					<p>Contact Us</p>
				</div>
			</div></Link>
			<Link to="/team"><div className="sidebarOptionBox">
				<div className="sidebarOptionText">
					<p>Our Team</p>
				</div>
			</div></Link>
		</div>;
}

export default Sidebar;